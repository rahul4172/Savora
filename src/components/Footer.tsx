import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight, Flower2 } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Border Glow */}
      <div className={styles.topBorder}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logo}>
              <Flower2 size={24} className={styles.logoIcon} />
              <div className={styles.logoText}>
                <span className={styles.logoTitle}>Savora</span>
                <span className={styles.logoSub}>FINE DINING</span>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              An unforgettable sanctuary of taste. Curated by world-class chefs, illuminated by candlelight, and crafted from the finest ingredients on earth.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter" className={styles.socialIcon}><Twitter size={18} /></a>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Experiences</h4>
            <ul className={styles.linkList}>
              <li><Link to="/menu">The Menu</Link></li>
              <li><Link to="/reservation">Reservations</Link></li>
              <li><Link to="/events">Private Dining</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">Our Story</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Visit Us</h4>
            <p className={styles.contactText}>
              The Taj Mahal Palace<br />
              Apollo Bunder, Colaba<br />
              Mumbai, Maharashtra 400001
            </p>
            <p className={styles.contactText} style={{ marginTop: '16px' }}>
              <strong className={styles.goldText}>Reservations:</strong><br />
              +91 22 6665 3366<br />
              reservations@savora.com
            </p>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>The Epicurean Club</h4>
            <p className={styles.contactText}>
              Subscribe to receive exclusive invitations, seasonal menus, and culinary news.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputWrapper}>
                <input type="email" placeholder="Email Address" className={styles.emailInput} required />
                <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Savora Fine Dining. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link to="#">Privacy Policy</Link>
            <span className={styles.separator}>|</span>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
