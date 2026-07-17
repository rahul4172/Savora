import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CalendarDays, DoorOpen, ChefHat, Wine, Utensils, Star, ArrowRight } from 'lucide-react';
import styles from './ExperienceJourney.module.css';

const milestones = [
  {
    id: 1,
    icon: <CalendarDays size={24} strokeWidth={1} />,
    title: 'Reserve Your Table',
    desc: 'Choose your preferred date, time and dining experience in just a few moments.',
    offsetY: 0
  },
  {
    id: 2,
    icon: <DoorOpen size={24} strokeWidth={1} />,
    title: 'Warm Welcome',
    desc: 'Our concierge welcomes you into an intimate atmosphere crafted for comfort and elegance.',
    offsetY: 40
  },
  {
    id: 3,
    icon: <ChefHat size={24} strokeWidth={1} />,
    title: "Chef's Signature Selection",
    desc: 'Experience carefully curated dishes prepared using seasonal ingredients and refined culinary techniques.',
    offsetY: -30
  },
  {
    id: 4,
    icon: <Wine size={24} strokeWidth={1} />,
    title: 'Wine Pairing Experience',
    desc: 'Discover perfectly paired wines selected to complement every course.',
    offsetY: 20
  },
  {
    id: 5,
    icon: <Utensils size={24} strokeWidth={1} />,
    title: 'Dessert Finale',
    desc: 'Conclude your evening with handcrafted desserts designed to surprise and delight.',
    offsetY: -40
  },
  {
    id: 6,
    icon: <Star size={24} strokeWidth={1} />,
    title: 'Memories That Stay',
    desc: 'Leave with unforgettable moments, exceptional service and a desire to return.',
    offsetY: 10
  }
];

const floatingChips = [
  { text: '★ 4.9 Guest Satisfaction', top: '10%', left: '5%', speed: 1.2 },
  { text: '✦ Personalized Service', top: '70%', left: '15%', speed: 0.8 },
  { text: 'Michelin Recommended', top: '15%', left: '45%', speed: 1.5 },
  { text: 'Seasonal Menu', top: '80%', left: '60%', speed: 0.9 },
  { text: 'Reservations Open', top: '5%', left: '80%', speed: 1.3 },
  { text: 'Private Dining Available', top: '65%', left: '90%', speed: 1.1 }
];

export default function ExperienceJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
  };

  const floatingAnim = (delay: number) => ({
    y: ["-8px", "8px"],
    transition: {
      y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: delay }
    }
  });

  return (
    <section className={styles.section} ref={containerRef}>
      
      {/* Background Ambience */}
      <div className={styles.ambientGlow}></div>
      <div className={styles.particlesContainer}></div>

      <div className="content-wrapper">
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <motion.div 
            className={styles.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            ✦ THE SAVORA EXPERIENCE
          </motion.div>

          <motion.h2 
            className={styles.heading}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            An Evening<br/>
            Designed Around<br/>
            You.
          </motion.h2>

          <motion.p 
            className={styles.intro}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            From the moment you reserve your table until the final farewell, every detail is thoughtfully orchestrated to create an unforgettable evening of elegance, flavour, and hospitality.
          </motion.p>
        </div>
      </div>

      {/* Floating Glass Chips - Positioned absolutely across the section */}
      {floatingChips.map((chip, idx) => {
        const parallaxY = useTransform(scrollYProgress, [0, 1], [50 * chip.speed, -50 * chip.speed]);
        return (
          <motion.div 
            key={idx}
            className={styles.chipWrapper}
            style={{ top: chip.top, left: chip.left, y: parallaxY }}
          >
            <motion.div 
              className={styles.glassChip}
              animate={floatingAnim(idx * 0.5)}
            >
              {chip.text}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Horizontal Storytelling Journey */}
      <div className={styles.journeyWrapper}>
        <div className={styles.journeyScroll}>
          
          {/* Animated Gold Connecting Line */}
          <div className={styles.connectingLineContainer}>
            <motion.div 
              className={styles.connectingLine}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
            />
          </div>

          <div className={styles.milestonesTrack}>
            {milestones.map((step, i) => (
              <motion.div 
                key={step.id} 
                className={styles.milestoneCard}
                style={{ transform: `translateY(${step.offsetY}px)` }}
                initial={{ opacity: 0, y: 50 + step.offsetY }}
                whileInView={{ opacity: 1, y: step.offsetY }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.19, 1, 0.22, 1] }}
              >
                {/* Glowing Node on the line */}
                <div className={styles.nodeWrapper}>
                  <motion.div 
                    className={styles.glowNode}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.15), duration: 0.8 }}
                  />
                  <div className={styles.solidNode} />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNum}>0{step.id}</span>
                    <div className={styles.iconWrapper}>{step.icon}</div>
                  </div>
                  
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.desc}</p>
                  
                  <div className={styles.cardFooter}>
                    <ArrowRight className={styles.arrowIcon} size={16} strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <div className={styles.bottomTransition}></div>
    </section>
  );
}
