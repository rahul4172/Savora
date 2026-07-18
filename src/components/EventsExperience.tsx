import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, Users, Crown, Check, ArrowRight } from 'lucide-react';
import styles from './EventsExperience.module.css';

const eventsData = [
  {
    id: 'weddings',
    title: 'Wedding Receptions',
    image: '/images/event_wedding.png',
    editorialTitle: 'A Celebration of Eternal Elegance',
    description: 'Transform your special day into a cinematic masterpiece. Our Grand Ballroom provides a breathtaking canvas of crystal chandeliers, golden candlelight, and bespoke floral arrangements, ensuring every moment is as flawless as your romance.',
    capacity: 'Up to 120 Guests',
    packages: ['Diamond Package', 'Platinum Package', 'Bespoke Package'],
    features: ['Custom Decorations', 'Live Music', 'Photography', 'Private Parking', 'Luxury Dining Experience']
  },
  {
    id: 'corporate',
    title: 'Corporate Dining',
    image: '/images/event_corporate.png',
    editorialTitle: 'Where Vision Meets Prestige',
    description: 'Elevate your business engagements in an atmosphere of absolute discretion and prestige. Designed for executive guests and private conferences, our modern elegant interiors provide the perfect backdrop for closing deals and celebrating milestones over world-class wine service.',
    capacity: 'Up to 50 Guests',
    packages: ['Executive Set Menu', 'Wine Pairing Experience', 'Gala Dinner'],
    features: ['A/V Equipment', 'Private Entrance', 'Sommelier Service', 'Valet Parking', 'Luxury Dining Experience']
  },
  {
    id: 'birthday',
    title: 'Birthday Celebrations',
    image: '/images/event_birthday.png',
    editorialTitle: 'Moments Steeped in Joy',
    description: 'Mark another beautiful year of life surrounded by those who matter most. From an exclusive champagne reception to a theatrical cake presentation, our team curates an atmosphere of warm lighting, elegant celebrations, and unforgettable joy.',
    capacity: 'Up to 30 Guests',
    packages: ['Intimate Celebration', 'Grand Soirée', 'Surprise Banquet'],
    features: ['Custom Cake', 'Champagne Toast', 'Table Decor', 'Private Parking', 'Luxury Dining Experience']
  },
  {
    id: 'chef',
    title: 'Private Chef Experience',
    image: '/images/event_chef_table.png',
    editorialTitle: 'Culinary Art, Unveiled',
    description: "An exclusive journey into the mind of a culinary master. Sit at the highly coveted Chef's Table and watch as our Executive Chef prepares a live luxury tasting menu exclusively for you, blending personal interaction with premium wine pairings.",
    capacity: '2 to 8 Guests',
    packages: ['Signature Tasting', 'Seasonal Journey', "Chef's Masterclass"],
    features: ['Live Preparation', 'Personal Sommelier', 'Signed Menu', 'Private Parking', 'Luxury Dining Experience']
  }
];

export default function EventsExperience() {
  const [activeTab, setActiveTab] = useState(eventsData[0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.section} ref={sectionRef}>
      
      {/* Background Ambience */}
      <div className={styles.ambientGlow}></div>
      <div className={styles.particlesContainer}></div>
      
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <div className={styles.labelWrapper}>
            <Flower2 size={12} className={styles.goldIcon} strokeWidth={2} /> 
            <span className={styles.label}>EVENTS & PRIVATE DINING</span>
          </div>

          <h1 className={styles.mainTitle}>
            Celebrate Life's<br />
            Most Extraordinary<br />
            <span className={styles.relativeBlock}>
              Moments.
              <span className={styles.handwritten}>Unforgettable</span>
            </span>
          </h1>

          <p className={styles.intro}>
            At Savora, we don't just host events—we craft memories. Allow our dedicated concierge team to transform your most important celebrations into an immersive journey of elegance, flawless service, and extraordinary gastronomy.
          </p>
        </div>

        {/* Interactive Glass Navigation */}
        <div className={styles.tabsContainer}>
          {eventsData.map((event) => (
            <button
              key={event.id}
              onClick={() => setActiveTab(event)}
              className={`${styles.tabBtn} ${activeTab.id === event.id ? styles.activeTab : ''}`}
            >
              {event.title}
              {activeTab.id === event.id && (
                <motion.div className={styles.tabHighlight} layoutId="tabHighlight" />
              )}
            </button>
          ))}
        </div>

        {/* Massive Cinematic Showcase */}
        <div className={styles.showcase}>
          
          {/* Left: Image Canvas */}
          <div className={styles.imageColumn}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                className={styles.imageWrapper}
                initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              >
                <img src={activeTab.image} alt={activeTab.title} className={styles.showcaseImage} />
                <div className={styles.imageOverlay}></div>
                
                {/* Thin decorative gold lines framing the image */}
                <div className={styles.cornerFrameTopLeft}></div>
                <div className={styles.cornerFrameBottomRight}></div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Information Panel */}
          <div className={styles.infoColumn}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                className={styles.infoContent}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              >
                <h3 className={styles.editorialTitle}>{activeTab.editorialTitle}</h3>
                
                <div className={styles.divider}></div>
                
                <p className={styles.description}>{activeTab.description}</p>
                
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <Users size={16} className={styles.goldIcon} />
                    <div>
                      <div className={styles.metaLabel}>GUEST CAPACITY</div>
                      <div className={styles.metaValue}>{activeTab.capacity}</div>
                    </div>
                  </div>
                  <div className={styles.metaItem}>
                    <Crown size={16} className={styles.goldIcon} />
                    <div>
                      <div className={styles.metaLabel}>AVAILABLE PACKAGES</div>
                      <div className={styles.metaValue}>{activeTab.packages.length} Tiered Options</div>
                    </div>
                  </div>
                </div>

                <div className={styles.featuresList}>
                  {activeTab.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      className={styles.featureItem}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                    >
                      <div className={styles.checkCircle}>
                        <Check size={10} strokeWidth={3} />
                      </div>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <button className={styles.planBtn}>
                  PLAN YOUR EVENT <ArrowRight size={18} className={styles.arrowHover} />
                  <span className={styles.btnShimmer}></span>
                </button>
                
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
