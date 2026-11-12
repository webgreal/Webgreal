/*
# Tighten grants on hosting platform tables

1. Purpose
- The hosting tables (profiles, subscriptions, websites, support_messages,
  payments) are meant for signed-in users only. A blanket grant had also given
  the anonymous (anon) role full CRUD on them, and authenticated users full
  write access to server-managed tables. This migration restricts grants to
  match the row level security design.

2. Security changes
- REVOKE all privileges from anon on the five hosting tables (they have no
  anon policies, so this only removes unused, risky access).
- subscriptions, websites, payments: server-managed data, authenticated keeps
  SELECT only (writes happen through the server/admin flows).
- profiles: authenticated keeps SELECT plus a column-restricted UPDATE
  (email, full_name, phone, business_name) so users can never change their own
  is_admin flag.
- support_messages: authenticated keeps SELECT and INSERT.

3. Notes
- RLS policies are unchanged. Row access rules (own rows / admin) still apply
  on top of these grants.
*/

REVOKE ALL ON public.profiles FROM anon;
REVOKE ALL ON public.subscriptions FROM anon;
REVOKE ALL ON public.websites FROM anon;
REVOKE ALL ON public.support_messages FROM anon;
REVOKE ALL ON public.payments FROM anon;

REVOKE INSERT, UPDATE, DELETE ON public.subscriptions FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.websites FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.payments FROM authenticated;

REVOKE INSERT, DELETE ON public.profiles FROM authenticated;
REVOKE ALL ON public.profiles FROM authenticated;
GRANT SELECT ON public.profiles TO authenticated;
GRANT UPDATE (email, full_name, phone, business_name) ON public.profiles TO authenticated;

REVOKE ALL ON public.subscriptions FROM authenticated;
GRANT SELECT ON public.subscriptions TO authenticated;

REVOKE ALL ON public.websites FROM authenticated;
GRANT SELECT ON public.websites TO authenticated;

REVOKE ALL ON public.support_messages FROM authenticated;
GRANT SELECT, INSERT ON public.support_messages TO authenticated;

REVOKE ALL ON public.payments FROM authenticated;
GRANT SELECT ON public.payments TO authenticated;
