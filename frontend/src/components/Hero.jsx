import { getTelLink } from '../config/businessConfig';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="section-label">Subramani Enterprises</span>
        <h1 className="hero__title">Reliable Driving Services</h1>
        <p className="hero__subtitle">
          Professional Drivers for Your Everyday, Hourly and Outstation Travel Needs.
        </p>

        <div className="hero__actions">
          <a href={getTelLink()} className="btn btn-primary">
            <PhoneIcon /> Call Now
          </a>
          <a href="#services" className="btn btn-outline">
            View Services
          </a>
        </div>

        <div className="hero__strip" aria-hidden="true">
          <RoadIcon />
        </div>
      </div>
    </section>
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

function RoadIcon() {
  return (
    <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="hero__road-svg">
      <line x1="0" y1="20" x2="400" y2="20" stroke="#2a3557" strokeWidth="2" strokeDasharray="18 14" />
    </svg>
  );
}

export default Hero;
