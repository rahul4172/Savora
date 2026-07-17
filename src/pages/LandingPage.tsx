import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoStrip from '../components/InfoStrip';
import SpecialtiesSection from '../components/SpecialtiesSection';
import ChefProfile from '../components/ChefProfile';
import GuestStories from '../components/GuestStories';
import ContactExperience from '../components/ContactExperience';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navbar />
      <HeroSection />
      <InfoStrip />
      <SpecialtiesSection />
      <ChefProfile />
      <GuestStories />
      <ContactExperience />
      {/* Footer Placeholder */}
      <footer style={{ padding: '40px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem', borderTop: '1px solid var(--color-border)' }}>
        <p>© 2026 Savora Fine Dining. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
