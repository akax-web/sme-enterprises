import { useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import businessConfig, { isPlaceholder } from '../config/businessConfig';
import Logo from './Logo';
import './QRCodeSection.css';

/**
 * QR Code section for customers to scan and visit the website directly.
 *
 * - If PUBLIC_WEBSITE_URL is a placeholder (site not yet deployed), a clear
 *   developer notice is shown instead of a broken QR.
 * - The QR is printed large enough to be photographed and shared.
 * - Download and Copy URL buttons are provided for convenience.
 */
function QRCodeSection() {
  const urlConfigured = !isPlaceholder(businessConfig.PUBLIC_WEBSITE_URL);
  const qrRef = useRef(null);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard
      .writeText(businessConfig.PUBLIC_WEBSITE_URL)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch(() => {
        // Clipboard API not available — fail silently
      });
  }

  function handleDownload() {
    const canvas = qrRef.current?.querySelector('canvas');
    if (!canvas) return;

    // Create a padded version for better print quality
    const padding = 24;
    const offscreen = document.createElement('canvas');
    offscreen.width = canvas.width + padding * 2;
    offscreen.height = canvas.height + padding * 2;
    const ctx = offscreen.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, offscreen.width, offscreen.height);
    ctx.drawImage(canvas, padding, padding);

    const link = document.createElement('a');
    link.download = 'subramani-enterprises-qr.png';
    link.href = offscreen.toDataURL('image/png');
    link.click();
  }

  return (
    <section className="section qr-section">
      <div className="container qr-section__inner">
        <span className="section-label">Scan &amp; Visit</span>
        <h2 className="section-title">Website QR Code</h2>
        <p className="qr-section__subtitle">
          Scan this QR code to visit our website instantly — no typing required.
        </p>

        {urlConfigured ? (
          <div className="qr-section__card">
            {/* White QR container for reliable scanning */}
            <div className="qr-section__code" ref={qrRef} aria-label="Website QR code">
              <QRCodeCanvas
                value={businessConfig.PUBLIC_WEBSITE_URL}
                size={260}
                bgColor="#ffffff"
                fgColor="#0b1220"
                level="H"
                includeMargin={true}
              />
            </div>

            <div className="qr-section__brand-row">
              <Logo size={32} />
              <div>
                <p className="qr-section__brand-name">{businessConfig.BUSINESS_NAME}</p>
                <p className="qr-section__brand-tag">{businessConfig.TAGLINE}</p>
              </div>
            </div>

            <p className="qr-section__url">{businessConfig.PUBLIC_WEBSITE_URL}</p>

            <div className="qr-section__actions">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={handleCopy}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleDownload}
              >
                <DownloadIcon /> Download QR
              </button>
            </div>
          </div>
        ) : (
          <div className="qr-section__dev-notice">
            <DevIcon />
            <p className="qr-section__dev-title">QR Code Not Ready Yet</p>
            <p className="qr-section__dev-text">
              The public website URL has not been configured. Once the site is deployed,
              update <code>PUBLIC_WEBSITE_URL</code> in{' '}
              <code>src/config/businessConfig.js</code> (or the{' '}
              <code>VITE_PUBLIC_WEBSITE_URL</code> environment variable) with the final
              HTTPS URL, and the QR code will be generated automatically.
            </p>
            <p className="qr-section__dev-text">
              <strong>Do not</strong> use localhost, 127.0.0.1, or a private IP — only
              the publicly accessible URL.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function CopyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 16l-4-4h3V4h2v8h3l-4 4z" fill="currentColor" />
      <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DevIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default QRCodeSection;
