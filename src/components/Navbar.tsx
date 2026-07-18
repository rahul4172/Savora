import { motion, useScroll, useMotionValueEvent, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import { User, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Mouse spotlight setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Handle shrink state
    if (latest > 50) {
      setShrunk(true);
    } else {
      setShrunk(false);
    }

    // Handle smart hide behavior
    if (latest > previous && latest > 200 && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Scroll Progress Bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'About', path: '/about' },
    { label: 'Reservation', path: '/reservation' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Events', path: '/events' },
  ];

  return (
    <>
      <div className={styles.navbarWrapper}>
        <motion.nav 
          ref={navRef}
          className={`${styles.navbar} ${shrunk ? styles.navbarShrunk : ''}`}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -120, opacity: 0 }
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.65, ease: [0.19, 1, 0.22, 1] }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => spotlightOpacity.set(1)}
          onMouseLeave={() => spotlightOpacity.set(0)}
        >
          {/* Spotlight Effect */}
          <motion.div 
            className={styles.spotlight}
            style={{
              x: useTransform(mouseX, (v) => v - 150),
              y: useTransform(mouseY, (v) => v - 150),
              opacity: spotlightOpacity
            }}
          />

          <div className={styles.navContainer}>
            
            {/* LOGO */}
            <div className={`${styles.logoContainer} ${shrunk ? styles.logoShrunk : ''}`} onClick={() => navigate('/')}>
              <div className={styles.logoIcon}>✿</div>
              <div className={styles.logoText}>
                <span className={styles.logoTitle}>Savora</span>
                <span className={styles.logoSubtitle}>FINE DINING</span>
              </div>
            </div>
            
            {/* DESKTOP LINKS */}
            <div className={`${styles.navLinks} ${shrunk ? styles.linksShrunk : ''}`}>
              {links.map((link) => {
                const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '');
                return (
                  <Link key={link.path} to={link.path} className={isActive ? styles.active : ''}>
                    {link.label}
                    {isActive && (
                      <div className={styles.activeIndicators}>
                        <span className={styles.activePill}></span>
                        <span className={styles.activeDot}></span>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* DESKTOP ACTIONS */}
            <div className={styles.actions}>
              <button className={styles.iconCircleBtn} onClick={() => navigate('/admin/login')} aria-label="Admin Login">
                <User size={18} strokeWidth={1.5} />
              </button>
              
              <motion.button 
                className={styles.premiumBtn}
                onClick={() => navigate('/reservation')}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3), inset 0 2px 4px rgba(255,255,255,0.6)" }}
                whileTap={{ scale: 0.96, boxShadow: "0 5px 15px rgba(212, 175, 55, 0.1), inset 0 1px 2px rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
              >
                <span className={styles.btnText}>Book a Table</span>
                <span className={styles.btnShimmer}></span>
              </motion.button>
            </div>

            {/* MOBILE HAMBURGER */}
            <button 
              className={styles.hamburgerBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
            </button>

          </div>

          {/* Ultra-thin scroll progress line attached to bottom */}
          <motion.div className={styles.progressBar} style={{ scaleX, originX: 0 }} />
        </motion.nav>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className={styles.mobileMenuContent}>
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    className={`${styles.mobileLink} ${location.pathname === link.path ? styles.mobileLinkActive : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                className={styles.mobileActions}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button className={styles.mobilePremiumBtn} onClick={() => { navigate('/reservation'); setIsMobileMenuOpen(false); }}>
                  RESERVE YOUR EVENING
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
