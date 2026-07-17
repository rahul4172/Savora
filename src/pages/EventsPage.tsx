import Navbar from '../components/Navbar';
import EventsExperience from '../components/EventsExperience';

export default function EventsPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <EventsExperience />
      </main>
      <footer style={{ padding: '40px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem', borderTop: '1px solid var(--color-border)' }}>
        <p>© 2026 Savora Fine Dining. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
