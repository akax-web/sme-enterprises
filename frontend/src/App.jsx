import { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HourlyPackage from './components/HourlyPackage';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import RegistrationSection from './components/RegistrationSection';
import ContactSection from './components/ContactSection';
import QRCodeSection from './components/QRCodeSection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';

/**
 * Error boundary — catches any runtime React exception and shows a safe
 * fallback instead of a completely blank white screen on production.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0b1220', color: '#f5b544', fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginBottom: '1rem' }}>
            <circle cx="12" cy="12" r="11" stroke="#f5b544" strokeWidth="1.5" opacity="0.5" />
            <path d="M12 8v4M12 16h.01" stroke="#f5b544" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.3rem' }}>Something went wrong</h2>
          <p style={{ margin: '0 0 1.5rem', color: '#94a3b8', fontSize: '0.95rem' }}>
            Please refresh the page or call us directly.
          </p>
          <a href="tel:+918668128965" style={{ background: '#f5b544', color: '#0b1220', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
            📞 Call Now
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * Single-page site for Subramani Enterprises.
 *
 * Pure anchor-link navigation (#home, #services, etc.) — no React Router
 * routes are used anywhere, so BrowserRouter is intentionally absent.
 */
function App() {
  function scrollToHourlyPackage() {
    document.getElementById('hourly-package')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <ErrorBoundary>
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main>
        <Hero />
        <Services onViewHourly={scrollToHourlyPackage} />
        <HourlyPackage />
        <TrustSection />
        <AboutSection />
        <RegistrationSection />
        <ContactSection />
        <QRCodeSection />
      </main>

      <Footer />
      <StickyMobileBar />
    </ErrorBoundary>
  );
}

export default App;

