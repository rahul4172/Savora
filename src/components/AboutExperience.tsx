import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Flame, HeartHandshake, Utensils, Users, Star, Clock, CheckCircle2 } from 'lucide-react';
import styles from './AboutExperience.module.css';

export default function AboutExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
  };

  return (
    <section className={styles.section} ref={containerRef}>
      
      {/* Ambient Background layers */}
      <div className={styles.ambientGlow}></div>
      <div className={styles.particlesContainer}></div>
      <div className={styles.textureOverlay}></div>
      
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* --- PART 1: OUR STORY (Editorial Split Layout) --- */}
        <div className={styles.splitLayout}>
          {/* LEFT: Storytelling */}
          <div className={styles.leftColumn}>
            <motion.div className={styles.labelWrapper} variants={itemVariants}>
              <Leaf size={12} className={styles.goldIcon} strokeWidth={2} /> 
              <span className={styles.label}>OUR STORY</span>
            </motion.div>

            <motion.h1 className={styles.mainTitle} variants={itemVariants}>
              More Than A Meal.<br />
              A Celebration of Taste,<br />
              Craft, and Timeless<br />
              <span className={styles.relativeBlock}>
                Hospitality.
                <span className={styles.handwritten}>Legacy</span>
              </span>
            </motion.h1>

            <motion.div className={styles.divider} variants={itemVariants}></motion.div>

            <motion.div className={styles.introParagraphs} variants={itemVariants}>
              <p>
                Since opening our doors, Savora Fine Dining has been devoted to transforming exceptional ingredients into unforgettable experiences. Every dish is thoughtfully crafted, every table is prepared with care, and every guest is welcomed as part of our story.
              </p>
              <p>
                Inspired by culinary traditions from around the world while embracing modern innovation, our kitchen celebrates authenticity, creativity, and precision. From the warmth of our hospitality to the artistry of every plate, every detail is designed to create moments that linger long after the final course.
              </p>
              <p>
                Whether it's an intimate dinner, a joyful family celebration, or an unforgettable evening with friends, Savora is where remarkable memories begin.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Editorial Collage & Floating Stats */}
          <div className={styles.rightColumn}>
            <div className={styles.collageGrid}>
              <motion.div className={`${styles.collageImg} ${styles.img1}`} variants={itemVariants}>
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800" alt="Chef Plating" />
              </motion.div>
              <motion.div className={`${styles.collageImg} ${styles.img2}`} variants={itemVariants}>
                <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" alt="Elegant Dining Room" />
              </motion.div>
              <motion.div className={`${styles.collageImg} ${styles.img3}`} variants={itemVariants}>
                <img src="https://images.unsplash.com/photo-1596683720372-23c2a39a5cc8?auto=format&fit=crop&q=80&w=800" alt="Fresh Premium Ingredients" />
              </motion.div>
              <motion.div className={`${styles.collageImg} ${styles.img4}`} variants={itemVariants}>
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" alt="Guests Enjoying Dinner" />
              </motion.div>
            </div>

            <motion.div className={`${styles.glassStat} ${styles.stat1}`} variants={itemVariants}>
              <Utensils size={18} className={styles.statIcon} />
              <div className={styles.statValue}>40+</div>
              <div className={styles.statLabel}>Signature Dishes</div>
            </motion.div>

            <motion.div className={`${styles.glassStat} ${styles.stat2}`} variants={itemVariants}>
              <Users size={18} className={styles.statIcon} />
              <div className={styles.statValue}>12,000+</div>
              <div className={styles.statLabel}>Happy Guests</div>
            </motion.div>

            <motion.div className={`${styles.glassStat} ${styles.stat3}`} variants={itemVariants}>
              <Star size={18} className={styles.statIcon} />
              <div className={styles.statValue}>4.9★</div>
              <div className={styles.statLabel}>Average Rating</div>
            </motion.div>

            <motion.div className={`${styles.glassStat} ${styles.stat4}`} variants={itemVariants}>
              <Clock size={18} className={styles.statIcon} />
              <div className={styles.statValue}>15+</div>
              <div className={styles.statLabel}>Years of Excellence</div>
            </motion.div>
          </div>
        </div>

        {/* --- PART 2: OUR PHILOSOPHY & WHAT MAKES US DIFFERENT --- */}
        <div className={styles.lowerSection}>
          
          <motion.div className={styles.philosophyBox} variants={itemVariants}>
            <div className={styles.labelWrapper}>
              <Flame size={12} className={styles.goldIcon} strokeWidth={2} /> 
              <span className={styles.label}>OUR PHILOSOPHY</span>
            </div>
            <h2 className={styles.subHeading}>Crafted With Purpose</h2>
            <div className={styles.philosophyContent}>
              <p>At Savora, luxury isn't defined by extravagance—it's defined by intention.</p>
              <p>We believe that extraordinary dining comes from the perfect balance of exceptional ingredients, passionate craftsmanship, thoughtful service, and an atmosphere that invites you to slow down and savor every moment.</p>
              <p>Every experience reflects our commitment to elegance, authenticity, and hospitality.</p>
            </div>
          </motion.div>

          <motion.div className={styles.differencesBox} variants={itemVariants}>
            <div className={styles.labelWrapper}>
              <HeartHandshake size={12} className={styles.goldIcon} strokeWidth={2} /> 
              <span className={styles.label}>WHAT MAKES US DIFFERENT</span>
            </div>
            <ul className={styles.diffList}>
              <li>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Seasonal ingredients sourced with care</span>
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Signature recipes inspired by global cuisines</span>
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Personalized fine dining experiences</span>
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Elegant interiors designed for every occasion</span>
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Warm, attentive hospitality from arrival to farewell</span>
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>Curated wine pairings and handcrafted beverages</span>
              </li>
            </ul>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
