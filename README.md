# Subramani Enterprises — Driving Services Website

A complete, production-style website for **Subramani Enterprises**,
a real driving services business. Built as a resume-worthy, full-stack
project using React, Java Spring Boot, and MySQL.

## Core Use Case

```
QR CODE SCAN
     ↓
PUBLIC WEBSITE URL
     ↓
DIRECTLY OPEN THE WEBSITE
```

There is **no login, signup, admin panel, OTP, or authentication of
any kind** anywhere in this project — on purpose. The entire site is
public, and every backend endpoint is a public `GET` endpoint.

## Tech Stack

| Layer     | Technology                          |
|-----------|--------------------------------------|
| Frontend  | React 18 + Vite, plain CSS           |
| Backend   | Java 17, Spring Boot 3.3, Maven      |
| Database  | MySQL 8                              |

## Project Structure

```
subramani-enterprises/
├── frontend/          # React website (see frontend/README.md)
├── backend/           # Spring Boot REST API (see backend/README.md)
├── database/
│   ├── schema.sql      # Table definitions
│   └── data.sql        # Seed data (with client placeholders marked)
└── README.md           # you are here
```

## ⚠️ Data Honesty Notice

This project only encodes information the client actually provided:

- Business name, proprietor name, and the 4 service names
- The exact hourly package figures (`₹500 + ₹100`, etc.) — displayed
  as-is, generically labelled "Base Charge + Additional Charge"
  because their exact meaning was not specified
- The Udyam registration details (Enterprise Type: Micro, Major
  Activity: Services)

Everything else — phone number, WhatsApp number, address, Google
Maps link, monthly package pricing, and the certificate image
file — is left as a clearly marked placeholder. **No information
has been invented.** See `frontend/src/config/businessConfig.js`
and `database/data.sql` for the exact list of what to fill in.

## Quick Start (Local Development)

### 1. Database

```bash
mysql -u root -p < database/schema.sql
mysql -u root -p < database/data.sql
```

### 2. Backend

```bash
cd backend
mvn spring-boot:run
```

Runs on `http://localhost:8080`. Full details in `backend/README.md`.

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173`. Full details in `frontend/README.md`.

Open `http://localhost:5173` in your browser — you should see the
full site loading service and package data from the backend.

## Filling In Real Client Data

Before this goes live, two things need real values:

1. **`frontend/src/config/businessConfig.js`** — phone number,
   WhatsApp number, address, Google Maps URL, and the final public
   website URL.
2. **`database/data.sql`** — the same contact fields in the
   `business_info` table (or update the row directly in MySQL later).
3. **The Udyam certificate image** — place the real file at
   `frontend/public/assets/udyam-certificate.jpg`.

Nothing else needs to change.

## Deployment Guide

### Step 1 — Deploy MySQL

Use any MySQL hosting (a managed database service, or your own
server). Run `schema.sql` then `data.sql` against it, with the
real business data filled in.

### Step 2 — Deploy the Backend

1. Build the jar:
   ```bash
   cd backend
   mvn clean package
   ```
2. Deploy `target/subramani-enterprises-backend-1.0.0.jar` to your
   hosting provider (Render, Railway, an EC2 instance, etc.).
3. Set these environment variables on the host:
   - `DB_URL` — JDBC URL of your production MySQL database
   - `DB_USERNAME`, `DB_PASSWORD`
   - `CORS_ALLOWED_ORIGINS` — your deployed frontend URL (set this
     in Step 4, then update and redeploy the backend)
4. Note the backend's public URL, e.g. `https://api.yoursite.com`.

### Step 3 — Build the Frontend

1. Set the build-time environment variable:
   ```
   VITE_API_BASE_URL=https://api.yoursite.com/api
   ```
2. Build:
   ```bash
   cd frontend
   npm install
   npm run build
   ```
3. Deploy the `dist/` folder to a static host (Netlify, Vercel,
   GitHub Pages, or Nginx).
4. Note the frontend's public URL, e.g. `https://subramanienterprises.com`.

### Step 4 — Connect the Two

1. Go back to the backend's environment variables and set
   `CORS_ALLOWED_ORIGINS` to the frontend's real URL from Step 3.
   Redeploy the backend.
2. Update `PUBLIC_WEBSITE_URL` in `frontend/src/config/businessConfig.js`
   to the frontend's real URL.
3. Rebuild and redeploy the frontend so the QR code section reflects
   the correct URL.

### Step 5 — Generate & Test the QR Code

1. Visit your deployed site and scroll to the "Website QR Code"
   section — it now renders a real QR code pointing at your live URL.
2. **Test it with an actual phone**: open your phone's camera app,
   scan the code, and confirm it opens the live site directly (no
   login screen, no redirect to localhost).
3. Save/export/print that QR code image for real-world use (e.g. a
   sticker on the vehicle, a printed card).

**Never point the QR code at `localhost`, `127.0.0.1`, or a local
network IP (`192.168.x.x`)** — it must be the final public HTTPS URL.

## What This Project Demonstrates (Resume Value)

- React component architecture (14 reusable components, no giant
  monolithic page)
- REST API design with Spring Boot (Controller → Service →
  Repository → Entity/DTO layering)
- MySQL schema design and JPA/Hibernate integration
- Real-world third-party integrations (`tel:` links, WhatsApp deep
  links, Google Maps links, QR code generation)
- Responsive, mobile-first UI/UX design
- Clean separation of configuration from code (single config file
  for all client-specific data)
- Honest handling of incomplete/placeholder data instead of
  fabricating content

## License

This is a client project built for Subramani Enterprises. All
business information, the business name, and the Udyam
registration details belong to the business owner.
