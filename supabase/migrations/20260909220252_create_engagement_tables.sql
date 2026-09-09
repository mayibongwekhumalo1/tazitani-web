/*
# Create engagement tables for Tazitani Foundation website

This migration creates four tables to support the public-facing forms on the
Tazitani Faith & Growth Foundation website. The site has no sign-in screen —
all forms are submitted anonymously by visitors — so all policies use
TO anon, authenticated with USING (true) / WITH CHECK (true) because the
data is intentionally public-write (anyone visiting the site can submit).

1. New Tables
- `contact_messages`: Messages sent through the Contact page form.
  - id (uuid, PK)
  - name (text, required)
  - email (text, required)
  - subject (text, optional)
  - message (text, required)
  - created_at (timestamptz, default now())
- `newsletter_subscribers`: Email addresses from newsletter signup forms.
  - id (uuid, PK)
  - email (text, required, unique)
  - source (text, optional — which page/form the signup came from)
  - created_at (timestamptz, default now())
- `volunteer_applications`: Applications from the Volunteer page form.
  - id (uuid, PK)
  - name (text, required)
  - email (text, required)
  - phone (text, optional)
  - area_of_interest (text, optional)
  - availability (text, optional)
  - message (text, optional)
  - created_at (timestamptz, default now())
- `donation_pledges`: Pledges from the Donate page form.
  - id (uuid, PK)
  - name (text, required)
  - email (text, required)
  - amount (numeric, optional)
  - frequency (text, optional — one-time / monthly etc.)
  - message (text, optional)
  - created_at (timestamptz, default now())

2. Security
- RLS enabled on all four tables.
- All policies use TO anon, authenticated with public-write access since
  the website has no authentication and all forms are intentionally public.
- SELECT is also open so a future admin view could list submissions; no
  sensitive columns exist in these tables.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_contact_messages" ON contact_messages;
CREATE POLICY "anon_select_contact_messages" ON contact_messages
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  source text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_newsletter_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_select_newsletter_subscribers" ON newsletter_subscribers
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_newsletter_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_insert_newsletter_subscribers" ON newsletter_subscribers
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS volunteer_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  area_of_interest text,
  availability text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE volunteer_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_volunteer_applications" ON volunteer_applications;
CREATE POLICY "anon_select_volunteer_applications" ON volunteer_applications
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_volunteer_applications" ON volunteer_applications;
CREATE POLICY "anon_insert_volunteer_applications" ON volunteer_applications
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS donation_pledges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  amount numeric(10,2),
  frequency text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE donation_pledges ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_donation_pledges" ON donation_pledges;
CREATE POLICY "anon_select_donation_pledges" ON donation_pledges
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_donation_pledges" ON donation_pledges;
CREATE POLICY "anon_insert_donation_pledges" ON donation_pledges
  FOR INSERT TO anon, authenticated WITH CHECK (true);
