import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryExperience from '../components/GalleryExperience';

export default function GalleryPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <GalleryExperience />
      </main>
      <Footer />
    </div>
  );
}

