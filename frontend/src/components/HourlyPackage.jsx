import { useEffect, useState } from 'react';
import { fetchHourlyPackages } from '../services/api';
import { getTelLink } from '../config/businessConfig';
import './HourlyPackage.css';

/**
 * Static fallback data — exact values confirmed by the client.
 * Displayed whenever the backend is unreachable or returns empty data.
 * Never expose API/HTTP errors to customers.
 *
 * Structure:
 *   id       — unique key for React
 *   category — bold upper-case label (shown as card heading)
 *   sub      — secondary line under the category (e.g. duration / qualifier)
 *   price    — the price string
 */
const STATIC_PACKAGES = [
  {
    id: 'night-4h',
    category: '4 HOURS',
    sub: null,
    price: '₹600 + ₹100',
  },
  {
    id: 'additional',
    category: 'ADDITIONAL HOURS',
    sub: 'Per Hour',
    price: '₹100 + ₹150',
  },
  {
    id: 'local-out',
    category: 'LOCAL OUTSTATION',
    sub: '4 Hours',
    price: '₹700 + ₹100 + Food',
  },
  {
    id: 'outstation',
    category: 'OUTSTATION TRIP',
    sub: 'Per Day / One Way',
    price: '₹1,800 + Food',
  },
];

function HourlyPackage() {
  const [packages, setPackages] = useState(null); // null = use static fallback
  const [fromBackend, setFromBackend] = useState(false);

  useEffect(() => {
    fetchHourlyPackages()
      .then((data) => {
        if (data && data.length > 0) {
          setPackages(data);
          setFromBackend(true);
        }
        // Backend returned empty — keep static data silently
      })
      .catch(() => {
        // Backend unavailable — static data is already shown. Never expose errors.
      });
  }, []);

  const displayPackages = fromBackend ? packages : STATIC_PACKAGES;

  return (
    <section id="hourly-package" className="section hourly-package">
      <div className="container">
        <span className="section-label">Flexible &amp; Transparent</span>
        <h2 className="section-title">Hourly Package</h2>

        {/* Single NIGHT SERVICE header — shown once above all cards */}
        <div className="hourly-package__night-header">
          <NightIcon />
          <div className="hourly-package__night-text">
            <span className="hourly-package__night-label">NIGHT SERVICE</span>
            <span className="hourly-package__night-timing">10:00 PM – 6:00 AM</span>
          </div>
        </div>

        {/* Package cards — no NIGHT SERVICE repeated inside each card */}
        <div className="hourly-package__grid">
          {fromBackend
            ? /* Backend data */
              packages.map((pkg) => (
                <div key={pkg.id} className="hourly-package__card card">
                  <div className="hourly-package__card-category">{pkg.name}</div>
                  <div className="hourly-package__card-price">{pkg.priceDetails}</div>
                  {pkg.priceLabel && (
                    <div className="hourly-package__card-label">{pkg.priceLabel}</div>
                  )}
                </div>
              ))
            : /* Static fallback */
              STATIC_PACKAGES.map((pkg) => (
                <div key={pkg.id} className="hourly-package__card card">
                  <div className="hourly-package__card-category">{pkg.category}</div>
                  {pkg.sub && (
                    <div className="hourly-package__card-sub">{pkg.sub}</div>
                  )}
                  <div className="hourly-package__card-price">{pkg.price}</div>
                </div>
              ))}
        </div>

        {/* Single informational note below all cards */}
        <p className="hourly-package__note">
          Additional hours will be charged at ₹100 + ₹150 per hour. Please contact the proprietor
          to confirm the applicable package and current charges.
        </p>

        <a href={getTelLink()} className="btn btn-primary">
          <PhoneIcon /> Call to Confirm Current Rates
        </a>
      </div>
    </section>
  );
}

function NightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
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

export default HourlyPackage;
