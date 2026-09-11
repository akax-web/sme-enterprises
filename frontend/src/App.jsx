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
 * Single-page site for Subramani Enterprises.
 *
 * There is no routing/login/auth of any kind here - the whole
 * experience is one public page with anchor-link navigation,
 * matching the "scan QR -> open public URL -> see everything"
 * use case described in the project brief.
 */
function App() {
  function scrollToHourlyPackage() {
    document.getElementById('hourly-package')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
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
    </>
  );
}

export default App;
