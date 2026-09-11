import { useEffect, useState } from 'react';
import { fetchServices } from '../services/api';
import ServiceCard from './ServiceCard';
import VehicleCategories from './VehicleCategories';
import './Services.css';

/** Static fallback — always shown if backend is unavailable. */
const STATIC_SERVICES = [
  {
    id: 'acting',
    name: 'Acting Drivers',
    shortDescription:
      'Experienced drivers available for personal, family and vehicle driving requirements.',
    buttonLabel: 'Contact Driver',
    buttonAction: 'CALL',
  },
  {
    id: 'hourly',
    name: 'Hourly Package',
    shortDescription:
      'Flexible hourly driving services, including night service and outstation requirements.',
    buttonLabel: 'View Hourly Packages',
    buttonAction: 'VIEW_HOURLY',
  },
  {
    id: 'monthly',
    name: 'Monthly Package',
    shortDescription:
      'Convenient monthly driver packages for customers who require regular driving support. Contact us for monthly package details and current rates.',
    buttonLabel: 'Contact Proprietor',
    buttonAction: 'CALL',
  },
];

function Services({ onViewHourly }) {
  const [services, setServices] = useState(STATIC_SERVICES);

  useEffect(() => {
    fetchServices()
      .then((data) => {
        if (data && data.length > 0) {
          setServices(data);
        }
        // Empty response → keep static data silently
      })
      .catch(() => {
        // Backend unavailable — static fallback already displayed.
        // Never expose errors to the customer.
      });
  }, []);

  return (
    <section id="services" className="section services">
      <div className="container">
        <span className="section-label">What We Offer</span>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Straightforward driving services designed around how our customers actually need
          them — by the hour, by the month, or for a specific vehicle.
        </p>

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.shortDescription}
              buttonLabel={service.buttonLabel}
              buttonAction={service.buttonAction}
              onViewHourly={onViewHourly}
            />
          ))}
        </div>

        <VehicleCategories />
      </div>
    </section>
  );
}

export default Services;
