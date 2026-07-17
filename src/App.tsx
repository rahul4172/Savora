import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ReservationPage from './pages/ReservationPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          {/* We will add /admin, etc. here in subsequent phases */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
