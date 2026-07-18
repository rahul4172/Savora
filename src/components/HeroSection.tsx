import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import styles from './HeroSection.module.css';
import { Star, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 1000], [0, -150]);
  const yCard = useTransform(scrollY, [0, 1000], [0, -50]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  // Mouse parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  // Interactive States
  const [activeTab, setActiveTab] = useState('Dining Room');
  
  const [selectedDate, setSelectedDate] = useState('Today, 24 May');
  const [isDateOpen, setIsDateOpen] = useState(false);
  const dates = ['Today, 24 May', 'Tomorrow, 25 May', 'Thu, 26 May', 'Fri, 27 May'];

  const [selectedTime, setSelectedTime] = useState('19:30');
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const times = ['18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

  // Close dropdowns if clicked outside (simplification: just close on any window click)
  useEffect(() => {
    const closeDropdowns = () => {
      setIsDateOpen(false);
      setIsTimeOpen(false);
    };
    window.addEventListener('click', closeDropdowns);
    return () => window.removeEventListener('click', closeDropdowns);
  }, []);

  const handleDateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDateOpen(!isDateOpen);
    setIsTimeOpen(false);
  };

  const handleTimeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTimeOpen(!isTimeOpen);
    setIsDateOpen(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className={styles.hero}>
      {/* LAYER 1 & 2: Background & Cinematic Photography */}
      <motion.div 
        className={styles.backgroundWrapper}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <img 
          src="/images/landing_hero.png" 
          alt="Cinematic luxury restaurant" 
          className={styles.bgImage}
        />
        <div className={styles.bgGradient}></div>
        <div className={styles.bgVignette}></div>
      </motion.div>

      {/* LAYER 3: Particles & Light Orbs */}
      <div className={styles.particles}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))}
      </div>

      <div className="content-wrapper" style={{ height: '100%', position: 'relative' }}>
        <div className={styles.editorialLayout}>
          
          {/* LAYER 4: Typography (Left Side) */}
          <motion.div 
            className={styles.textContent}
            style={{ y: yText, opacity: opacityText, x: parallaxX }}
          >
            <motion.div 
              className={styles.luxuryLabel}
              initial={{ opacity: 0, letterSpacing: '0px' }}
              animate={{ opacity: 1, letterSpacing: '4px' }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.19,1,0.22,1] }}
            >
              <span className={styles.goldLine}></span>
              MICHELIN STAR DINING
            </motion.div>

            <motion.div 
              className={styles.titleGroup}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.19,1,0.22,1] }}
            >
              <h1 className={styles.mainHeading}>The Art of</h1>
              <span className={styles.scriptHeading}>Perfection</span>
            </motion.div>

            <motion.p 
              className={styles.poeticDesc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            >
              An unforgettable sanctuary of taste. Curated by world-class chefs, illuminated by candlelight, and crafted from the finest ingredients on earth.
            </motion.p>

            <motion.div 
              className={styles.buttonGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.19,1,0.22,1] }}
            >
              <button className={styles.btnPremium}>
                <span>Reserve Table</span>
                <div className={styles.btnGlow}></div>
              </button>
              <button className={styles.btnGlass}>
                Explore Menu
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              className={styles.socialProof}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.8 }}
            >
              <div className={styles.proofItem}>
                <Star className={styles.proofIcon} size={16} fill="var(--color-gold)" />
                <span>Featured in Forbes</span>
              </div>
              <div className={styles.proofDivider}></div>
              <div className={styles.proofItem}>
                <CheckCircle2 className={styles.proofIcon} size={16} />
                <span>25,000+ Happy Guests</span>
              </div>
            </motion.div>
          </motion.div>

          {/* LAYER 5: Glass Reservation Concierge (Right Side) */}
          <motion.div 
            className={styles.conciergeWrapper}
            style={{ y: yCard }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.2, ease: [0.19,1,0.22,1] }}
          >
            <motion.div 
              className={styles.conciergeCard}
              style={{ y: parallaxY }}
              whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(212,175,55,0.4)' }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.livePulse}>
                  <div className={styles.pulseDot}></div>
                  <div className={styles.pulseRing}></div>
                </div>
                <span>Live Concierge Availability</span>
              </div>
              
              <div className={styles.inputGrid}>
                {/* Date Picker */}
                <div className={styles.luxuryInput}>
                  <label>Date</label>
                  <div className={styles.selectBox} onClick={handleDateClick}>
                    <span>{selectedDate}</span>
                    <motion.div animate={{ rotate: isDateOpen ? 180 : 0 }}>
                      <ChevronDown size={14} className={styles.goldChevron} />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {isDateOpen && (
                      <motion.div 
                        className={styles.dropdownMenu}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {dates.map(date => (
                          <div 
                            key={date} 
                            className={styles.dropdownItem}
                            onClick={() => setSelectedDate(date)}
                          >
                            {date}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Time Picker */}
                <div className={styles.luxuryInput}>
                  <label>Time</label>
                  <div className={styles.selectBox} onClick={handleTimeClick}>
                    <span>{selectedTime}</span>
                    <motion.div animate={{ rotate: isTimeOpen ? 180 : 0 }}>
                      <ChevronDown size={14} className={styles.goldChevron} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isTimeOpen && (
                      <motion.div 
                        className={styles.dropdownMenu}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {times.map(time => (
                          <div 
                            key={time} 
                            className={styles.dropdownItem}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className={styles.luxuryInput} style={{ marginTop: '24px' }}>
                <label>Experience</label>
                <div className={styles.experienceTabs}>
                  {['Dining Room', "Chef's Table", 'Private'].map((tab) => (
                    <button 
                      key={tab}
                      className={activeTab === tab ? styles.tabActive : styles.tab}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                className={styles.btnCheck}
                onClick={() => alert(`Checking availability for ${selectedDate} at ${selectedTime} in the ${activeTab}...`)}
              >
                <span>Check Tables</span>
              </button>
              
              <div className={styles.availabilityText}>
                <span className={styles.goldDot}></span>
                Only 3 tables remaining for tonight
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* LAYER 6: Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      >
        <div className={styles.scrollLineWrapper}>
          <motion.div 
            className={styles.scrollLine}
            animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
        <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
      </motion.div>
    </section>
  );
}

