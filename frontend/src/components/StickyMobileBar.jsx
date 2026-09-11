import businessConfig, { getTelLink, getWhatsAppLink, isPlaceholder } from '../config/businessConfig';
import './StickyMobileBar.css';

/**
 * Sticky bottom bar shown only on small screens (CSS media query),
 * so the two most important actions (Call, WhatsApp) are always
 * one tap away for someone who just scanned the QR code.
 */
function StickyMobileBar() {
  const hasWhatsApp = !isPlaceholder(businessConfig.WHATSAPP_NUMBER);

  return (
    <div className="sticky-mobile-bar">
      <a href={getTelLink()} className="sticky-mobile-bar__btn sticky-mobile-bar__call">
        <PhoneIcon /> Call Now
      </a>
      {hasWhatsApp && (
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-mobile-bar__btn sticky-mobile-bar__whatsapp"
        >
          <WhatsAppIcon /> WhatsApp
        </a>
      )}
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1.1l-2.2 2.1z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1112 20z"
        fill="currentColor"
      />
      <path
        d="M9 8.5c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.8.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2 .9.7 1.4.9 1.7 1 .2.1.4.1.6-.1.2-.2.7-.8.9-1 .2-.3.4-.2.6-.1l1.8.9c.2.1.4.2.4.4 0 .2 0 1-.4 1.5-.4.5-1.4.9-2.2.9-.7 0-1.6-.2-3.3-1.1-2.6-1.3-4.2-4-4.3-4.2-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.8-2z"
        fill="var(--color-whatsapp-icon-fg, #0b1220)"
      />
    </svg>
  );
}

export default StickyMobileBar;
