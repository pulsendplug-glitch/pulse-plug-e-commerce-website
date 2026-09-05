# Pulse & Plug

A clean Next.js storefront for Pulse & Plug with a database driven product catalog.

## Product management

The storefront starts with **zero products**. Products are created from `/admin` and are stored in Postgres. Product photos are uploaded to Vercel Blob, so product images are not committed to GitHub and there is no crop or collage system.

## Required Vercel environment variables

- `DATABASE_URL` — Neon Postgres connection string
- `BLOB_READ_WRITE_TOKEN` — Vercel Blob read/write token
- `ADMIN_PASSWORD` — private Product Manager password
- `ADMIN_SESSION_SECRET` — long random secret used to sign the admin session cookie

The app automatically creates the `products` table on first database use. A copy of the schema is also included at `db/schema.sql`.

## Admin

Open `/admin`, sign in, upload a product photo, enter the product details, and add it. The product will then appear on the public Shop page.

Keep all database and Blob credentials in Vercel environment variables. Never put them in client-side code or GitHub.
