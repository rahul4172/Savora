import Navbar from '../components/Navbar';
import MenuExperience from '../components/MenuExperience';

export default function MenuPage() {
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      <main>
        <MenuExperience />
      </main>
      
      {/* Footer Placeholder */}
      <footer style={{ padding: '60px 40px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', borderTop: '1px solid rgba(197, 160, 89, 0.1)', background: '#050505' }}>
        <p>© 2026 Savora Fine Dining. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
