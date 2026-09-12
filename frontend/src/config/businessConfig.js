// ============================================================
// SUBRAMANI ENTERPRISES — CENTRAL BUSINESS CONFIGURATION
// ============================================================
// This is the ONLY file you should need to edit to hand this
// project over to the client with real information.
//
// Every placeholder below is clearly marked. Replace the
// placeholder values with the real client details BEFORE
// deploying the site publicly.
//
// Do NOT invent phone numbers, addresses, or links — leave the
// placeholder text in place until the real value is provided.
// ============================================================

const businessConfig = {
  // ---------------- Identity ----------------
  BUSINESS_NAME: 'Subramani Enterprises',
  PROPRIETOR_NAME: 'Subramani R',
  TAGLINE: 'Driving Services',

  // ---------------- Contact (REPLACE THESE) ----------------
  // Phone number from Udyam Registration Certificate (UDYAM-TN-02-0194936).
  // Full format with country code for tel: and wa.me/ links (no spaces/dashes).
  PROPRIETOR_PHONE: '918668128965',

  // WhatsApp — add the real WhatsApp number once confirmed with the client.
  // Format: country code + number, digits only (e.g. "919876543210").
  WHATSAPP_NUMBER: 'ENTER_REAL_WHATSAPP_NUMBER',

  // Pre-filled WhatsApp message. Feel free to customize the wording.
  WHATSAPP_MESSAGE:
    'Hello, I would like to enquire about Subramani Enterprises driving services.',

  // ---------------- Location (REPLACE THESE) ----------------
  // Address from Udyam certificate: No.46/17, 10th Street, B.V Nagar,
  // Nanganallur, Chennai – 600061, Tamil Nadu
  BUSINESS_ADDRESS: 'No.46/17, 10th Street, B.V Nagar, Nanganallur, Chennai – 600061',
  // Paste a real Google Maps share link here once verified with the client.
  GOOGLE_MAPS_URL: 'ENTER_REAL_GOOGLE_MAPS_URL',

  // ---------------- Deployment ----------------
  // This MUST be the final, public, HTTPS deployed URL of this website.
  // It is used to generate the QR code.
  // Do NOT use localhost / 127.0.0.1 / a local IP address here.
  // Can be overridden by the VITE_PUBLIC_WEBSITE_URL environment variable.
  // Set VITE_PUBLIC_WEBSITE_URL in your Netlify environment variables
  // to the final deployed URL (e.g. https://subramani-enterprises.netlify.app/).
  // Do NOT hard-code a placeholder URL here — leave it to the env variable.
  PUBLIC_WEBSITE_URL:
    import.meta.env.VITE_PUBLIC_WEBSITE_URL || '',

  // ---------------- Backend API ----------------
  // Base URL of the deployed Spring Boot backend.
  // Read from an environment variable at build time when available,
  // falling back to localhost for local development.
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',

  // ---------------- Business Registration ----------------
  UDYAM_NUMBER: 'UDYAM-TN-02-0194936',
  UDYAM_ENTERPRISE_TYPE: 'Micro',
  UDYAM_MAJOR_ACTIVITY: 'Services',
  // The certificate lives in public/assets/. During local dev Vite serves
  // public/ at /, so the path is /assets/... In production the Vite base is
  // /sme-enterprises/, so Vite automatically prefixes public/ assets with it.
  // Using import.meta.env.BASE_URL gives us the correct prefix in both cases.
  CERTIFICATE_IMAGE_PATH: `${import.meta.env.BASE_URL}assets/udyam-certificate.jpg`,
};

// ---------------- Derived helper links ----------------
// These are computed once here so components don't repeat this logic.

export function getTelLink() {
  return `tel:${businessConfig.PROPRIETOR_PHONE}`;
}

export function getWhatsAppLink() {
  const encodedMessage = encodeURIComponent(businessConfig.WHATSAPP_MESSAGE);
  return `https://wa.me/${businessConfig.WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function isPlaceholder(value) {
  if (!value) return true;
  return (
    value.startsWith('ENTER_REAL_') ||
    value.startsWith('ENTER_') ||
    value.includes('YOUR-DEPLOYED-DOMAIN')
  );
}

export default businessConfig;
