import businessConfig, { getTelLink, getWhatsAppLink, isPlaceholder } from '../config/businessConfig';
import './ContactSection.css';

function ContactSection() {
  const hasWhatsApp = !isPlaceholder(businessConfig.WHATSAPP_NUMBER);
  const hasMapsUrl = !isPlaceholder(businessConfig.GOOGLE_MAPS_URL);
  const hasAddress = !isPlaceholder(businessConfig.BUSINESS_ADDRESS);

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Contact</h2>

        <div className="contact-section__card card">
          <div className="contact-section__identity">
            <h3 className="contact-section__name">{businessConfig.PROPRIETOR_NAME}</h3>
            <p className="contact-section__role">Proprietor</p>
            <p className="contact-section__business">{businessConfig.BUSINESS_NAME}</p>
          </div>

          {hasAddress && (
            <div className="contact-section__address">
              <AddressIcon />
              <p>{businessConfig.BUSINESS_ADDRESS}</p>
            </div>
          )}

          <div className="contact-section__actions">
            <a href={getTelLink()} className="btn btn-primary">
              <PhoneIcon /> Call Now
            </a>

            {hasWhatsApp && (
              <a
                href={getWhatsAppLink()}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            )}

            {hasMapsUrl && (
              <a
                href={businessConfig.GOOGLE_MAPS_URL}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapIcon /> Get Directions
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1.1l-2.2 2.1z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1112 20z"
        fill="currentColor"
      />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function AddressIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

export default ContactSection;
