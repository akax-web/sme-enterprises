# Subramani Enterprises — Frontend (React)

Public, mobile-first website for Subramani Enterprises driving
services. No login, signup, or authentication anywhere — the site
is designed to be opened directly from a QR code scan.

## Tech Stack

- React 18 + Vite
- React Router (for future multi-page growth; current site is a
  single scrollable page with anchor links)
- Plain CSS (no framework) with a shared design-token stylesheet
- `qrcode.react` for the QR code section

## Project Structure

```
src/
├── components/     # Header, Hero, ServiceCard, HourlyPackage, etc.
├── config/
│   └── businessConfig.js   # <-- EDIT THIS FILE with real client info
├── services/
│   └── api.js       # fetch() wrapper around backend REST API
├── App.jsx
└── main.jsx
```

## ⚠️ Before Deploying — Edit One File

Open `src/config/businessConfig.js` and replace every value that
starts with `ENTER_REAL_` or contains `YOUR-DEPLOYED-DOMAIN`:

| Placeholder             | What to put there                              |
|--------------------------|------------------------------------------------|
| `PROPRIETOR_PHONE`       | Real phone number, digits only with country code |
| `WHATSAPP_NUMBER`        | Real WhatsApp number, same format               |
| `BUSINESS_ADDRESS`       | Real business address                           |
| `GOOGLE_MAPS_URL`        | Real Google Maps share link                     |
| `PUBLIC_WEBSITE_URL`     | Final deployed HTTPS URL (used for the QR code) |

Until these are filled in, the site still works — WhatsApp and
Maps buttons simply won't render (see `isPlaceholder()` checks in
`ContactSection.jsx` and `Footer.jsx`), and the QR code section
will show a warning instead of a broken code.

## The Udyam Certificate Image

No certificate image ships with this repository. To enable the
"View Registration Certificate" button:

1. Place the real certificate image at:
   `public/assets/udyam-certificate.jpg`
2. That's it — `CertificateViewer.jsx` already points at this path.

See `public/assets/CERTIFICATE_PLACEHOLDER_README.txt` for details.

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure the backend API URL (optional for local dev)

By default the app calls `http://localhost:8080/api`. To point at
a different backend, create a `.env` file:

```
VITE_API_BASE_URL=http://localhost:8080/api
```

### 3. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:5173`.

### 4. Build for production

```bash
npm run build
```

This outputs a static site to `dist/`. Verified working — the
build produces `dist/index.html` plus hashed CSS/JS bundles with
no compile errors.

### 5. Preview the production build locally

```bash
npm run preview
```

## Deploying

Any static hosting provider works (the frontend is a static
site once built): Netlify, Vercel, GitHub Pages, or a plain
Nginx server.

1. Set `VITE_API_BASE_URL` to your deployed backend's public URL
   as a build-time environment variable on your hosting provider.
2. Run `npm run build`.
3. Deploy the contents of `dist/`.
4. Once you have your final live URL, update
   `PUBLIC_WEBSITE_URL` in `businessConfig.js` and rebuild/redeploy
   so the QR code section points at the real, public URL — never
   `localhost` or a local IP address.

## Components Reference

| Component              | Responsibility                                      |
|--------------------------|----------------------------------------------------|
| `Header`                | Logo, business name, proprietor, nav, call button   |
| `Hero`                  | Main headline + Call Now / View Services buttons    |
| `Services`              | Fetches and renders the 4 service cards             |
| `ServiceCard`           | One reusable service card                           |
| `VehicleCategories`     | Normal/Premium/Luxury car categories                |
| `HourlyPackage`         | Hourly pricing table, exactly as provided by client |
| `TrustSection`          | "Why Choose Us" checklist                           |
| `AboutSection`          | Short about paragraph                               |
| `RegistrationSection`   | Udyam badge + opens CertificateViewer               |
| `CertificateViewer`     | Accessible modal/lightbox for the certificate image |
| `ContactSection`        | Call / WhatsApp / Directions buttons                |
| `Footer`                | Repeats key contact links + copyright               |
| `StickyMobileBar`       | Fixed bottom Call/WhatsApp bar on small screens     |
| `QRCodeSection`         | Renders a QR code for `PUBLIC_WEBSITE_URL`          |

## Accessibility Notes

- Skip-to-content link at the top of the page
- Certificate modal traps focus on its close button and closes on Esc
- All interactive elements are real `<button>`/`<a>` tags
- Certificate image has a descriptive `alt` attribute
