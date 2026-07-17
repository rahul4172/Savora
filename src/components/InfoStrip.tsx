import { motion } from 'framer-motion';
import styles from './InfoStrip.module.css';
import { MapPin, Phone, Clock, Award } from 'lucide-react';

export default function InfoStrip() {
  return (
    <div className="content-wrapper">
      <motion.div 
        className={`glass-panel ${styles.strip}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.item}>
          <div className={styles.icon} style={{ fontSize: '24px' }}>✿</div>
          <div className={styles.textGroup}>
            <strong>MICHELIN STAR</strong>
            <span>3 Star Restaurant</span>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.item}>
          <div className={styles.icon}><Clock size={22} /></div>
          <div className={styles.textGroup}>
            <strong>OPENING HOURS</strong>
            <span>11:00 AM – 11:00 PM</span>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.item}>
          <div className={styles.icon}><MapPin size={22} /></div>
          <div className={styles.textGroup}>
            <strong>LOCATION</strong>
            <span>123 Food Street, Kolkata</span>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.item}>
          <div className={styles.icon}><Phone size={22} /></div>
          <div className={styles.textGroup}>
            <strong>CALL US</strong>
            <span>+91 98765 43210</span>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.item}>
          <div className={styles.icon}><Award size={22} /></div>
          <div className={styles.textGroup}>
            <strong>AWARDS</strong>
            <span>8 International Awards</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
