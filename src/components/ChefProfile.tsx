import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Star, Award, Leaf, MapPin, ChefHat } from 'lucide-react';
import styles from './ChefProfile.module.css';

const infoStack = [
  { icon: <ChefHat size={18} strokeWidth={1} />, text: 'Executive Chef' },
  { icon: <Clock size={18} strokeWidth={1} />, text: '25 Years Experience' },
  { icon: <Star size={18} strokeWidth={1} />, text: 'Michelin Trained' },
  { icon: <Award size={18} strokeWidth={1} />, text: 'International Culinary Awards' },
  { icon: <Leaf size={18} strokeWidth={1} />, text: 'Farm-to-Table Philosophy' },
  { icon: <MapPin size={18} strokeWidth={1} />, text: 'Locally Sourced Ingredients' },
];

export default function ChefProfile() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [15, -15]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const floatingAnim = (delay: number) => ({
    y: ["-10px", "10px"],
    transition: {
      y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: delay }
    }
  });

  const quoteWords = "“Cooking is not about feeding people. It is about creating memories that remain long after the last course.”".split(" ");

  return (
    <section className={styles.section} ref={containerRef}>
      
      {/* Background Decor */}
      <div className={styles.radialGlow}></div>
      <div className={styles.decorLine1}></div>
      <div className={styles.decorLine2}></div>

      <div className="content-wrapper">
        
        {/* SECTION LABEL */}
        <motion.div 
          className={styles.label}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          ✦ THE CULINARY ARTIST
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h2 
          className={styles.heading}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Every Masterpiece<br />
          Begins With<br />
          A Vision.
        </motion.h2>

        <div className={styles.grid}>
          
          {/* LEFT SIDE - Profile */}
          <div className={styles.leftCol}>
            <motion.p 
              className={styles.story}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              For over three decades, Chef Alessandro has transformed seasonal ingredients into unforgettable culinary journeys. Every dish reflects precision, patience, and a relentless pursuit of perfection.
            </motion.p>

            <motion.div 
              className={styles.infoStack}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {infoStack.map((item, i) => (
                <motion.div key={i} className={styles.infoItem} variants={fadeUp}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <span className={styles.infoText}>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Signature Draw Animation */}
            <motion.div 
              className={styles.signatureBlock}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={styles.signatureSVGWrapper}>
                <svg viewBox="0 0 400 150" className={styles.signatureSvg}>
                  {/* Elegant abstract signature path */}
                  <motion.path 
                    d="M 50 100 C 70 50, 90 40, 110 70 C 130 110, 150 110, 160 80 C 170 50, 190 30, 200 60 C 210 90, 230 110, 240 70 C 260 20, 280 40, 290 80 C 300 120, 340 100, 360 80"
                    fill="transparent"
                    strokeWidth="3"
                    stroke="#c5a059" /* gold */
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.path 
                    d="M 70 120 C 120 120, 200 115, 300 120"
                    fill="transparent"
                    strokeWidth="2"
                    stroke="#c5a059"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 2.5 }}
                  />
                </svg>
              </div>
              <motion.div variants={fadeUp} className={styles.signatureCaption}>
                Executive Chef<br />
                <span className={styles.signatureSubCaption}>Savora Fine Dining</span>
              </motion.div>
              <motion.div variants={fadeUp} className={styles.thinDivider}></motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Cinematic Portrait */}
          <div className={styles.rightCol}>
            <motion.div 
              className={styles.imageMask}
              initial={{ clipPath: 'inset(10% 10% 10% 10%)', opacity: 0 }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <motion.img 
                src="/images/chef.png" 
                alt="Chef Alessandro Portrait" 
                className={styles.portrait}
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.04 }}
                viewport={{ once: true }}
                transition={{ duration: 30, ease: "linear" }}
              />
              <div className={styles.imageVignette}></div>
            </motion.div>

            {/* Floating Glass Cards */}
            <motion.div style={{ y: yParallaxFast, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
              <motion.div className={`${styles.glassCard} ${styles.card1}`} animate={floatingAnim(0)} style={{ pointerEvents: 'auto' }}>
                <span className={styles.cardLarge}>25+</span>
                <span className={styles.cardSmall}>Years Experience</span>
              </motion.div>
            </motion.div>

            <motion.div style={{ y: yParallaxSlow, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
              <motion.div className={`${styles.glassCard} ${styles.card2}`} animate={floatingAnim(1)} style={{ pointerEvents: 'auto' }}>
                <Star size={16} className={styles.cardGoldIcon} strokeWidth={1.5} />
                <div className={styles.cardCol}>
                  <span className={styles.cardMedium}>Michelin</span>
                  <span className={styles.cardSmall}>Recommended Chef</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div style={{ y: yParallaxFast, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
              <motion.div className={`${styles.glassCard} ${styles.card3}`} animate={floatingAnim(0.5)} style={{ pointerEvents: 'auto' }}>
                <span className={styles.cardLarge}>15+</span>
                <span className={styles.cardSmall}>International Awards</span>
              </motion.div>
            </motion.div>

            <motion.div style={{ y: yParallaxSlow, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
              <motion.div className={`${styles.glassCard} ${styles.card4}`} animate={floatingAnim(1.5)} style={{ pointerEvents: 'auto' }}>
                <ChefHat size={18} className={styles.cardGoldIcon} strokeWidth={1.5} />
                <div className={styles.cardCol}>
                  <span className={styles.cardSmall}>Signature Dish</span>
                  <span className={styles.cardMedium}>Truffle Wagyu</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* OVERSIZED EDITORIAL QUOTE */}
        <motion.div 
          className={styles.quoteBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {quoteWords.map((word, i) => (
            <motion.span 
              key={i} 
              className={styles.quoteWord}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.div>

      </div>

      <div className={styles.bottomTransition}></div>
    </section>
  );
}
