import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventsExperience from '../components/EventsExperience';

export default function EventsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <EventsExperience />
      </main>
      <Footer />
    </div>
  );
}

