import { useState } from 'react';
import businessConfig, { getTelLink, getWhatsAppLink, isPlaceholder } from '../config/businessConfig';
import Logo from './Logo';
import CertificateViewer from './CertificateViewer';
import './Footer.css';

function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const hasWhatsApp = !isPlaceholder(businessConfig.WHATSAPP_NUMBER);
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Logo size={38} />
          <div>
            <p className="site-footer__name">{businessConfig.BUSINESS_NAME}</p>
            <p className="site-footer__tagline">{businessConfig.TAGLINE}</p>
          </div>
        </div>

        <div className="site-footer__proprietor">
          <p className="site-footer__proprietor-name">{businessConfig.PROPRIETOR_NAME}</p>
          <p className="site-footer__proprietor-role">Proprietor</p>
        </div>

        <div className="site-footer__links">
          <a href={getTelLink()}>Call Now</a>
          {hasWhatsApp && (
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          )}
          <button type="button" onClick={() => setModalOpen(true)}>
            View Registration Certificate
          </button>
        </div>
      </div>

      <div className="site-footer__bottom container">
        <p>&copy; {year} {businessConfig.BUSINESS_NAME}. All Rights Reserved.</p>
      </div>

      <CertificateViewer open={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}

export default Footer;
