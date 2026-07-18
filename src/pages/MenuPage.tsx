import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuExperience from '../components/MenuExperience';

export default function MenuPage() {
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      <main>
        <MenuExperience />
      </main>
      
      <Footer />
    </div>
  );
}

