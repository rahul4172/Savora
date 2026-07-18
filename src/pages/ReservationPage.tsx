import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReservationExperience from '../components/ReservationExperience';

export default function ReservationPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <ReservationExperience />
      </main>
      <Footer />
    </div>
  );
}

