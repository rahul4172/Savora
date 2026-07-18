import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutExperience from '../components/AboutExperience';

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      <main>
        <AboutExperience />
      </main>
      
      <Footer />
    </div>
  );
}

