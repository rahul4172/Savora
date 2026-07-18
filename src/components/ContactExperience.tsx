import { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Clock, Phone, Mail, Car, Navigation, 
  Accessibility, Wine, MessageSquare, Instagram, 
  Facebook, Linkedin, Youtube, Twitter, Star, Calendar 
} from 'lucide-react';
import styles from './ContactExperience.module.css';

export default function ContactExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
  };

  return (
    <section className={styles.section} ref={containerRef}>
      
      {/* Background Ambience */}
      <div className={styles.ambientGlowTop}></div>
      <div className={styles.ambientGlowBottom}></div>
      <div className={styles.particlesContainer}></div>
      <div className={styles.textureOverlay}></div>

      {/* Floating Live Status */}
      <motion.div 
        className={styles.liveStatusCard}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className={styles.statusDot}></div>
        <div className={styles.statusContent}>
          <span className={styles.statusTitle}>OPEN NOW</span>
          <span className={styles.statusDetail}>18 Tables Remaining Today</span>
          <span className={styles.statusMeta}>Average Response Time: {'<'} 10 Minutes</span>
        </div>
      </motion.div>

      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Header */}
        <div className={styles.headerBlock}>
          <motion.div className={styles.labelWrapper} variants={itemVariants}>
            <Star size={12} className={styles.goldIcon} strokeWidth={2} /> 
            <span className={styles.label}>CONTACT US</span>
          </motion.div>

          <motion.h1 className={styles.mainTitle} variants={itemVariants}>
            Let's Create<br />
            Your Next<br />
            <span className={styles.relativeBlock}>
              Evening.
              <span className={styles.handwritten}>Unforgettable</span>
            </span>
          </motion.h1>

          <motion.p className={styles.intro} variants={itemVariants}>
            Our concierge team is ready to assist you with reservations, private events, special occasions, or any questions you may have. Every conversation begins with exceptional hospitality.
          </motion.p>
        </div>

        {/* Split Layout: Info & Form */}
        <div className={styles.splitLayout}>
          
          {/* LEFT: Concierge Information */}
          <motion.div className={styles.leftPanel} variants={itemVariants}>
            
            <div className={styles.infoBlock}>
              <div className={styles.infoHeader}>
                <MapPin size={18} className={styles.goldIcon} />
                <h3>Visit Us</h3>
              </div>
              <p>Savora Fine Dining<br/>125 Riverside Boulevard<br/>Mumbai, Maharashtra<br/>India</p>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoHeader}>
                <Clock size={18} className={styles.goldIcon} />
                <h3>Opening Hours</h3>
              </div>
              <p><strong>Monday – Thursday</strong><br/>12:00 PM – 11:00 PM</p>
              <p className={styles.mt2}><strong>Friday – Sunday</strong><br/>12:00 PM – Midnight</p>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoHeader}>
                <Phone size={18} className={styles.goldIcon} />
                <h3>Concierge</h3>
              </div>
              <p className={styles.goldText}>+91 98765 43210</p>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoHeader}>
                <Calendar size={18} className={styles.goldIcon} />
                <h3>Reservations</h3>
              </div>
              <p>reservations@savora.com</p>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoHeader}>
                <Mail size={18} className={styles.goldIcon} />
                <h3>General Enquiries</h3>
              </div>
              <p>hello@savora.com</p>
            </div>

            <div className={styles.servicesBlock}>
              <div className={styles.infoHeader}>
                <Star size={18} className={styles.goldIcon} />
                <h3>Services</h3>
              </div>
              <ul className={styles.servicesList}>
                <li><Car size={14} /> Valet Parking</li>
                <li><Accessibility size={14} /> Wheelchair Accessible</li>
                <li><Star size={14} /> Private Dining</li>
                <li><MessageSquare size={14} /> Complimentary Wi-Fi</li>
                <li><Wine size={14} /> Wine Cellar</li>
              </ul>
            </div>

          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div className={styles.rightPanel} variants={itemVariants}>
            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className={styles.formGroup}>
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>
                <div className={styles.formGroup}>
                  <label>Occasion</label>
                  <select>
                    <option>Reservation</option>
                    <option>Private Event</option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Corporate Dinner</option>
                    <option>Chef's Table</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow3}>
                <div className={styles.formGroup}>
                  <label>Preferred Date</label>
                  <input type="date" />
                </div>
                <div className={styles.formGroup}>
                  <label>Time</label>
                  <input type="time" />
                </div>
                <div className={styles.formGroup}>
                  <label>Guests</label>
                  <input type="number" min="1" max="20" placeholder="2" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea rows={4} placeholder="How can we make your evening special?"></textarea>
              </div>

              <button type="button" className={styles.submitBtn}>
                SEND ENQUIRY
                <div className={styles.btnShimmer}></div>
              </button>
            </form>
          </motion.div>

        </div>

        {/* Interactive Map Section */}
        <motion.div className={styles.mapSection} variants={itemVariants}>
          <div className={styles.mapImageWrapper}>
            <img src="/images/luxury_dining_room.png" alt="Savora Entrance" className={styles.mapImage} />
            <div className={styles.mapOverlay}></div>
            
            <div className={styles.locationCard}>
              <h4>Savora Riverside</h4>
              <p>Located in the heart of Mumbai's premier luxury district, overlooking the waterfront.</p>
              
              <div className={styles.travelTimes}>
                <div className={styles.travelItem}>
                  <span>Airport</span>
                  <span>45 mins</span>
                </div>
                <div className={styles.travelItem}>
                  <span>City Center</span>
                  <span>15 mins</span>
                </div>
              </div>
              
              <div className={styles.mapButtons}>
                <button className={styles.outlineBtn}><Navigation size={14} /> Directions</button>
                <button className={styles.solidBtn}><MapPin size={14} /> Open in Maps</button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Connections */}
        <motion.div className={styles.socialSection} variants={itemVariants}>
          <div className={styles.socialDivider}></div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialBtn}><Instagram size={20} /></a>
            <a href="#" className={styles.socialBtn}><Facebook size={20} /></a>
            <a href="#" className={styles.socialBtn}><Linkedin size={20} /></a>
            <a href="#" className={styles.socialBtn}><Twitter size={20} /></a>
            <a href="#" className={styles.socialBtn}><Youtube size={20} /></a>
          </div>
          <div className={styles.socialDivider}></div>
        </motion.div>

      </motion.div>
    </section>
  );
}



