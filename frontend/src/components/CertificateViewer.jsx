import { useEffect, useRef } from 'react';
import businessConfig from '../config/businessConfig';
import './CertificateViewer.css';

/**
 * Accessible, keyboard-friendly lightbox for the Udyam Registration Certificate.
 *
 * - The real certificate image is at /assets/udyam-certificate.jpg
 * - Image fills the modal with preserved aspect ratio, no distortion
 * - Scroll/zoom supported on mobile via overflow:auto on the image wrapper
 * - Escape key and click-outside both close the modal
 * - Focus is trapped to the close button when open
 */
function CertificateViewer({ open, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Delay focus so the modal has rendered
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="certificate-modal__overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Udyam Registration Certificate viewer"
      onClick={onClose}
    >
      <div
        className="certificate-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="certificate-modal__topbar">
          <div>
            <p className="certificate-modal__topbar-title">
              Udyam Registration Certificate
            </p>
            <p className="certificate-modal__topbar-sub">
              {businessConfig.BUSINESS_NAME} · UDYAM-TN-02-0194936
            </p>
          </div>
          <button
            type="button"
            className="certificate-modal__close"
            onClick={onClose}
            ref={closeButtonRef}
            aria-label="Close certificate viewer"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Certificate image — scrollable on mobile for zoom */}
        <div className="certificate-modal__image-wrap">
          <img
            src={businessConfig.CERTIFICATE_IMAGE_PATH}
            alt="Subramani Enterprises Udyam Registration Certificate — Government of India, Ministry of Micro, Small and Medium Enterprises"
            className="certificate-modal__image"
          />
        </div>

        <p className="certificate-modal__hint">
          Pinch to zoom on mobile · Use browser zoom on desktop · Press Esc or tap outside to close
        </p>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default CertificateViewer;
