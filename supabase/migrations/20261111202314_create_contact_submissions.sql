/*
# Create contact_submissions table

1. Purpose
- Stores inquiries submitted through the contact form on the Webgreal website.

2. New Tables
- `contact_submissions`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) - full name of the person contacting
  - `email` (text, not null) - reply-to email address
  - `phone` (text, nullable) - optional phone number
  - `company` (text, nullable) - optional company name
  - `service` (text, not null) - requested service
  - `budget` (text, not null) - selected project budget range
  - `message` (text, not null) - project overview written by the visitor
  - `created_at` (timestamp with time zone, defaults to now)

3. Security
- Enable Row Level Security on `contact_submissions`.
- This is a single-tenant, no-sign-in website: visitors submit via the site's
  server API route, so INSERT is granted to `anon` and `authenticated` with an
  insert-only policy. No public read access: only `service_role` (server-side)
  can read submissions.
- Grants: INSERT to anon + authenticated; SELECT to service_role only.

4. Notes
- No `user_id` column: the site has no accounts and data is not user-scoped.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text NOT NULL,
  budget text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
  ON contact_submissions (created_at DESC);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_submissions TO anon, authenticated;
GRANT SELECT ON contact_submissions TO service_role;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
