import './TrustSection.css';

const TRUST_POINTS = [
  'Experienced Drivers',
  'Flexible Service Packages',
  'Hourly & Monthly Options',
  'Support for Different Vehicle Types',
  'Udyam Registered Enterprise',
  'Direct Customer Contact',
];

function TrustSection() {
  return (
    <section className="section trust-section">
      <div className="container">
        <span className="section-label">Why Us</span>
        <h2 className="section-title">Why Choose Subramani Enterprises?</h2>

        <ul className="trust-section__list">
          {TRUST_POINTS.map((point) => (
            <li key={point} className="trust-section__item">
              <CheckIcon />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="rgba(34,197,94,0.15)" />
      <path d="M7 12.5l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default TrustSection;
