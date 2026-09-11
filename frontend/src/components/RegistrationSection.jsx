import { useState } from 'react';
import CertificateViewer from './CertificateViewer';
import './RegistrationSection.css';

function RegistrationSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="section registration-section">
      <div className="container registration-section__inner">
        <span className="section-label">Business Registration</span>
        <h2 className="section-title">Verified Business</h2>

        <div className="registration-section__card">
          <div className="registration-section__badge-wrap">
            <span className="badge-verified">
              <CheckShieldIcon /> Udyam Registered Enterprise
            </span>
          </div>

          <p className="registration-section__text">
            Subramani Enterprises is registered under the Udyam Registration scheme
            (Ministry of Micro, Small and Medium Enterprises, Government of India) as a
            Micro enterprise engaged in Services.
          </p>

          <div className="registration-section__meta">
            <div className="registration-section__meta-item">
              <span className="registration-section__meta-label">Registration Number</span>
              <span className="registration-section__meta-value">UDYAM-TN-02-0194936</span>
            </div>
            <div className="registration-section__meta-item">
              <span className="registration-section__meta-label">Enterprise Type</span>
              <span className="registration-section__meta-value">Micro</span>
            </div>
            <div className="registration-section__meta-item">
              <span className="registration-section__meta-label">Major Activity</span>
              <span className="registration-section__meta-value">Services</span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-outline registration-section__cta"
            onClick={() => setModalOpen(true)}
          >
            <CertificateIcon /> View Udyam Registration Certificate
          </button>
        </div>
      </div>

      <CertificateViewer open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

function CheckShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l8 3v6c0 5-3.4 8.7-8 11-4.6-2.3-8-6-8-11V5l8-3z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M12 2l8 3v6c0 5-3.4 8.7-8 11-4.6-2.3-8-6-8-11V5l8-3z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M8.5 12.2l2.3 2.3 4.7-4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18.5 18.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default RegistrationSection;
