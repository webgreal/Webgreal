/*
# Create hosting platform tables (profiles, subscriptions, websites, support_messages, payments)

1. Purpose
- Backs the new hosting subscription area: signup/login, hosting plans,
  customer dashboard, and admin area.

2. New Tables
- `profiles`
  - `id` (uuid, primary key, references auth.users, cascade on delete)
  - `email` (text, not null)
  - `full_name` (text, not null, default '')
  - `phone` (text, not null, default '')
  - `business_name` (text, not null, default '')
  - `is_admin` (boolean, not null, default false) - only server/admin may change
  - `created_at` (timestamptz, default now)
- `subscriptions`
  - `id` (uuid, primary key), `user_id` (uuid, references auth.users, cascade)
  - `stripe_customer_id`, `stripe_subscription_id` (text, nullable)
  - `plan` (text, nullable) - e.g. monthly / yearly
  - `status` (text, nullable) - e.g. active / canceled
  - `current_period_end` (timestamptz, nullable)
  - `created_at` (timestamptz, default now)
- `websites`
  - `id` (uuid, primary key), `user_id` (uuid, references auth.users, cascade)
  - `website_name` (text, not null)
  - `status` (text, not null, default 'waiting_details', check in: waiting_details, in_design, in_development, live)
  - `domain` (text, nullable), `notes` (text, nullable)
  - `updated_at` (timestamptz, default now)
- `support_messages`
  - `id` (uuid, primary key), `user_id` (uuid, references auth.users, cascade)
  - `message` (text, not null), `created_at` (timestamptz, default now)
- `payments`
  - `id` (uuid, primary key), `user_id` (uuid, references auth.users, cascade)
  - `stripe_invoice_id` (text, nullable), `amount` (numeric, nullable)
  - `currency` (text, nullable), `status` (text, nullable)
  - `created_at` (timestamptz, default now)

3. Automatic profile creation
- Trigger `on_auth_user_created` on auth.users inserts a matching `profiles`
  row whenever a new user signs up, copying full_name/phone/business_name
  from the signup metadata.

4. Security
- RLS enabled on all five tables.
- Helper function `public.is_admin()` (SECURITY DEFINER, stable) checks
  profiles.is_admin for the current user; EXECUTE revoked from PUBLIC/anon,
  granted to authenticated. Prevents recursive RLS on profiles.
- Regular users: SELECT/INSERT/UPDATE only on their own rows.
- Admins (is_admin = true): SELECT and UPDATE across all rows.
- Users can never change their own `is_admin`: the UPDATE grant on profiles is
  column-restricted to (email, full_name, phone, business_name), excluding
  is_admin for every role writing through the Data API.
- Subscriptions and payments are managed by the server (Stripe), so
  authenticated users get SELECT only on those two tables.
- Grants issued explicitly per role alongside each policy.
*/

-- 1. Tables ---------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  business_name text NOT NULL DEFAULT '',
  is_admin boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id text,
  stripe_subscription_id text,
  plan text,
  status text,
  current_period_end timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.websites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  website_name text NOT NULL,
  status text NOT NULL DEFAULT 'waiting_details'
    CHECK (status IN ('waiting_details', 'in_design', 'in_development', 'live')),
  domain text,
  notes text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.support_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_invoice_id text,
  amount numeric,
  currency text,
  status text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_user ON public.subscriptions (user_id);
CREATE INDEX IF NOT EXISTS idx_websites_user ON public.websites (user_id);
CREATE INDEX IF NOT EXISTS idx_support_messages_user ON public.support_messages (user_id);
CREATE INDEX IF NOT EXISTS idx_payments_user ON public.payments (user_id);

-- 2. Admin helper ---------------------------------------------------------

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND is_admin = true
  );
$$;

REVOKE EXECUTE ON FUNCTION public.is_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;

-- 3. Auto-create profile on signup ----------------------------------------

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, phone, business_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.email, ''),
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'phone', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'business_name', '')
  );
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 4. profiles: RLS ---------------------------------------------------------

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON public.profiles TO authenticated;
-- Column-restricted update: users can never write is_admin through the API.
GRANT UPDATE (email, full_name, phone, business_name) ON public.profiles TO authenticated;

DROP POLICY IF EXISTS "select_own_or_admin_profiles" ON public.profiles;
CREATE POLICY "select_own_or_admin_profiles" ON public.profiles
FOR SELECT TO authenticated
USING (auth.uid() = id OR public.is_admin());

DROP POLICY IF EXISTS "update_own_or_admin_profiles" ON public.profiles;
CREATE POLICY "update_own_or_admin_profiles" ON public.profiles
FOR UPDATE TO authenticated
USING (auth.uid() = id OR public.is_admin())
WITH CHECK (auth.uid() = id OR public.is_admin());

-- 5. subscriptions: RLS (read-only for users) ------------------------------

ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON public.subscriptions TO authenticated;

DROP POLICY IF EXISTS "select_own_or_admin_subscriptions" ON public.subscriptions;
CREATE POLICY "select_own_or_admin_subscriptions" ON public.subscriptions
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin());

-- 6. websites: RLS (read-only for users) -----------------------------------

ALTER TABLE public.websites ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON public.websites TO authenticated;

DROP POLICY IF EXISTS "select_own_or_admin_websites" ON public.websites;
CREATE POLICY "select_own_or_admin_websites" ON public.websites
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin());

-- 7. support_messages: RLS -------------------------------------------------

ALTER TABLE public.support_messages ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON public.support_messages TO authenticated;

DROP POLICY IF EXISTS "select_own_or_admin_support_messages" ON public.support_messages;
CREATE POLICY "select_own_or_admin_support_messages" ON public.support_messages
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "insert_own_support_messages" ON public.support_messages;
CREATE POLICY "insert_own_support_messages" ON public.support_messages
FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

-- 8. payments: RLS (read-only for users) -----------------------------------

ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON public.payments TO authenticated;

DROP POLICY IF EXISTS "select_own_or_admin_payments" ON public.payments;
CREATE POLICY "select_own_or_admin_payments" ON public.payments
FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.is_admin());
