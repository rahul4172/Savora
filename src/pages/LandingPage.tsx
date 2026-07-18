import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
      <Footer />
    </div>
  );
}

