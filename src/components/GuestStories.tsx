import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Star, CheckCircle, Award, TrendingUp, MapPin } from 'lucide-react';
import styles from './GuestStories.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Aarav Mehta',
    city: 'Mumbai',
    flag: '🇮🇳',
    date: 'March 2026',
    rating: 5,
    type: 'Anniversary Dinner',
    text: "From the moment we arrived, we were treated like royalty. The sommelier's recommendations were immaculate, perfectly complementing the Chef's tasting menu. A truly unforgettable anniversary.",
    initials: 'AM',
    align: 'left',
    width: '400px',
    offset: '0px'
  },
  {
    id: 2,
    name: 'Riya Sharma',
    city: 'Delhi',
    flag: '🇮🇳',
    date: 'February 2026',
    rating: 5,
    type: 'First Fine Dining Experience',
    text: "I was nervous about my first fine dining experience, but the staff made it so approachable and magical. Every dish was a breathtaking work of art. I cannot wait to return.",
    initials: 'RS',
    align: 'right',
    width: '350px',
    offset: '120px'
  },
  {
    id: 3,
    name: 'Arjun Kapoor',
    city: 'Bengaluru',
    flag: '🇮🇳',
    date: 'January 2026',
    rating: 5,
    type: 'Business Dinner',
    text: "Savora provided the perfect environment for a high-stakes business dinner. The discretion, pacing, and flawless execution of the courses impressed my international clients immensely.",
    initials: 'AK',
    align: 'left',
    width: '380px',
    offset: '60px'
  },
  {
    id: 4,
    name: 'Eleanor Vance',
    city: 'London',
    flag: '🇬🇧',
    date: 'December 2025',
    rating: 5,
    type: 'International Traveller',
    text: "Having dined at Michelin-starred restaurants across Europe, I can confidently say Savora stands among the absolute best. A masterful blend of technique and passion.",
    initials: 'EV',
    align: 'center',
    width: '420px',
    offset: '0px'
  }
];

const Counter = ({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start * 10) / 10); // Keep 1 decimal for 4.9
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div className={styles.counterBox} ref={ref}>
      <div className={styles.counterNumber}>
        {Number.isInteger(end) ? Math.floor(count) : count.toFixed(1)}
        <span className={styles.counterSuffix}>{suffix}</span>
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
};

export default function GuestStories() {
  const containerRef = useRef(null);

  return (
    <section className={styles.section} ref={containerRef}>
      
      {/* Background Ambience */}
      <div className={styles.ambientGlow}></div>
      <div className={styles.particlesContainer}></div>

      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <div className={styles.labelWrapper}>
            <Star size={12} className={styles.goldIcon} strokeWidth={2} /> 
            <span className={styles.label}>GUEST STORIES</span>
          </div>

          <h1 className={styles.mainTitle}>
            Every Visit<br />
            Leaves<br />
            <span className={styles.relativeBlock}>
              A Story.
              <span className={styles.handwritten}>Unforgettable</span>
            </span>
          </h1>

          <p className={styles.intro}>
            Every evening at Savora is remembered differently, yet every story begins with exceptional hospitality, unforgettable flavours, and moments shared with the people who matter.
          </p>

          <Link to="/gallery" className={styles.galleryBtn}>
            View Full Gallery
          </Link>
        </div>

        {/* Counter Stats Visualization */}
        <div className={styles.statsGrid}>
          <Counter end={4.9} suffix="/5" label="Google Rating" />
          <Counter end={2500} suffix="+" label="Verified Reviews" />
          <Counter end={98} suffix="%" label="Guests Recommend Savora" />
          <Counter end={92} suffix="%" label="Returning Guests" />
        </div>

        {/* Featured Testimonial */}
        <div className={styles.featuredContainer}>
          <motion.div 
            className={styles.featuredQuote}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <div className={styles.quoteMarks}>“</div>
            <h2 className={styles.featuredText}>
              Every course felt like a work of art. From the warm welcome to the final dessert, Savora delivered one of the finest dining experiences we have ever enjoyed.
            </h2>
            
            <div className={styles.featuredAuthor}>
              <div className={styles.avatarGlow}>
                <div className={styles.avatarPlaceholder}>MK</div>
              </div>
              <div className={styles.authorDetails}>
                <div className={styles.authorName}>
                  Meera Kapoor <CheckCircle size={14} className={styles.verifiedIcon} />
                </div>
                <div className={styles.authorMeta}>
                  <MapPin size={12} /> Mumbai {`🇮🇳`} • Verified Google Review • May 2026
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Trust Badges */}
          <motion.div 
            className={`${styles.trustBadge} ${styles.badge1}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Award size={16} /> Michelin Recommended
          </motion.div>
          <motion.div 
            className={`${styles.trustBadge} ${styles.badge2}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <TrendingUp size={16} /> Luxury Dining Excellence Award
          </motion.div>
        </div>

        {/* Asymmetrical Masonry/Floating Grid */}
        <div className={styles.storiesMasonry}>
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className={`${styles.storyCard} ${styles[`align_${testimonial.align}`]}`}
              style={{ maxWidth: testimonial.width }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div className={styles.storyHeader}>
                <div className={styles.miniAvatar}>{testimonial.initials}</div>
                <div>
                  <div className={styles.storyName}>{testimonial.name}</div>
                  <div className={styles.storyMeta}>{testimonial.city} {testimonial.flag} • {testimonial.type}</div>
                </div>
              </div>
              <p className={styles.storyText}>“{testimonial.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
