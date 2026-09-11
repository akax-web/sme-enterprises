import './AboutSection.css';

function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-section__inner">
        <span className="section-label">About Us</span>
        <h2 className="section-title">About Subramani Enterprises</h2>
        <p className="about-section__text">
          Subramani Enterprises provides professional driving services for customers looking
          for reliable and experienced drivers for hourly, monthly and vehicle-specific
          requirements.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
