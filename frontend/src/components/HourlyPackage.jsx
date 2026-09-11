import { useEffect, useState } from 'react';
import { fetchHourlyPackages } from '../services/api';
import { getTelLink } from '../config/businessConfig';
import './HourlyPackage.css';

/**
 * Static fallback data — EXACT values from the client-provided reference image.
 * Displayed whenever the backend is unreachable or the API is slow to respond.
 * The meaning of each "+" amount has NOT been confirmed by the client, so we
 * show the raw format without inventing label names.
 */
const STATIC_PACKAGES = [
  {
    id: 'night-1',
    category: 'NIGHT SERVICE',
    timing: '10:00 PM – 6:00 AM',
    duration: '4 Hours',
    price: '₹500 + ₹100',
  },
  {
    id: 'night-2',
    category: 'NIGHT SERVICE',
    timing: '10:00 PM – 6:00 AM',
    duration: '4 Hours',
    price: '₹700 + ₹150',
  },
  {
    id: 'night-3',
    category: 'NIGHT SERVICE',
    timing: '10:00 PM – 6:00 AM',
    duration: '4 Hours',
    price: '₹800 + ₹100',
  },
  {
    id: 'night-add',
    category: 'ADDITIONAL HOURS',
    timing: null,
    duration: 'Per Hour',
    price: '₹100 + ₹150',
  },
  {
    id: 'local-out',
    category: 'LOCAL OUTSTATION',
    timing: null,
    duration: '4 Hours',
    price: '₹700 + ₹100 + Food',
  },
  {
    id: 'outstation',
    category: 'OUTSTATION TRIP',
    timing: null,
    duration: 'One Way',
    price: '₹1,800 + Food',
  },
];

function HourlyPackage() {
  const [packages, setPackages] = useState(STATIC_PACKAGES);
  const [fromBackend, setFromBackend] = useState(false);

  useEffect(() => {
    fetchHourlyPackages()
      .then((data) => {
        if (data && data.length > 0) {
          setPackages(data);
          setFromBackend(true);
        }
        // If backend returns empty array, keep static data silently
      })
      .catch(() => {
        // Backend unavailable — static data already shown, nothing to do.
        // Never expose errors to the customer.
      });
  }, []);

  return (
    <section id="hourly-package" className="section hourly-package">
      <div className="container">
        <span className="section-label">Flexible &amp; Transparent</span>
        <h2 className="section-title">Hourly Package</h2>

        <div className="hourly-package__header-row">
          <div className="hourly-package__night-badge">
            <NightIcon />
            <span>Night Service: 10:00 PM – 6:00 AM</span>
          </div>
        </div>

        <div className="hourly-package__grid">
          {fromBackend
            ? /* Backend data — use existing row rendering */
              packages.map((pkg) => (
                <div key={pkg.id} className="hourly-package__card card">
                  <div className="hourly-package__card-category">{pkg.name}</div>
                  <div className="hourly-package__card-price">{pkg.priceDetails}</div>
                  {pkg.priceLabel && (
                    <div className="hourly-package__card-label">{pkg.priceLabel}</div>
                  )}
                </div>
              ))
            : /* Static fallback — polished cards */
              STATIC_PACKAGES.map((pkg) => (
                <div key={pkg.id} className="hourly-package__card card">
                  <div className="hourly-package__card-category">{pkg.category}</div>
                  {pkg.timing && (
                    <div className="hourly-package__card-timing">{pkg.timing}</div>
                  )}
                  <div className="hourly-package__card-duration">{pkg.duration}</div>
                  <div className="hourly-package__card-price">{pkg.price}</div>
                </div>
              ))}
        </div>

        <p className="hourly-package__note">
          Please contact the proprietor to confirm the applicable package and current charges.
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
