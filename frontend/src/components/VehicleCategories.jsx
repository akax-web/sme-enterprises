import { useEffect, useState } from 'react';
import { fetchVehicleCategories } from '../services/api';
import { getTelLink } from '../config/businessConfig';
import './VehicleCategories.css';

/** Static fallback vehicle categories — exact client values. */
const STATIC_CATEGORIES = [
  {
    id: 'normal',
    categoryName: 'NORMAL CARS',
    description: 'Experienced drivers for all standard / economy vehicles.',
    priceNote: 'Rates vary based on vehicle type, duration and service requirement.',
  },
  {
    id: 'premium',
    categoryName: 'PREMIUM CARS',
    description: 'Drivers experienced with mid-range and premium segment vehicles.',
    priceNote: 'Rates vary based on vehicle type, duration and service requirement.',
  },
  {
    id: 'luxury',
    categoryName: 'LUXURY CARS',
    description: 'Professionally trained drivers for luxury and high-end vehicles.',
    priceNote: 'Rates vary based on vehicle type, duration and service requirement.',
  },
];

function VehicleCategories() {
  const [categories, setCategories] = useState(STATIC_CATEGORIES);

  useEffect(() => {
    fetchVehicleCategories()
      .then((data) => {
        if (data && data.length > 0) {
          setCategories(data);
        }
      })
      .catch(() => {
        // Backend unavailable — static fallback already shown.
      });
  }, []);

  return (
    <div id="vehicle-categories" className="vehicle-categories">
      <h3 className="vehicle-categories__heading">All Model Cars – Experienced Drivers</h3>
      <p className="vehicle-categories__intro">
        Experienced drivers available for different types of vehicles including normal, premium
        and luxury cars.
      </p>

      <div className="vehicle-categories__grid">
        {categories.map((category) => (
          <div key={category.id} className="vehicle-categories__item card">
            <span className="vehicle-categories__badge">{category.categoryName}</span>
            <p className="vehicle-categories__desc">{category.description}</p>
            <p className="vehicle-categories__note">{category.priceNote}</p>
          </div>
        ))}
      </div>

      <a href={getTelLink()} className="btn btn-primary vehicle-categories__cta">
        <PhoneIcon /> Call for Rates
      </a>
    </div>
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

export default VehicleCategories;
