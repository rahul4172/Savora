import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ExperienceSection.module.css';
import { useRef } from 'react';

export default function ExperienceSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className={`section-padding ${styles.experience}`} ref={ref}>
      <div className={styles.splitLayout}>
        <div className={styles.content}>
          <motion.span 
            className="luxury-subheading"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            The Heritage
          </motion.span>
          <motion.h2 
            className={`luxury-heading ${styles.title}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A legacy of culinary perfection.
          </motion.h2>
          <motion.p 
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Savora isn't just a restaurant; it's a testament to the art of fine dining. Founded on the principles of impeccable service and extraordinary ingredients, our dining room offers a sanctuary from the bustling world outside. Here, time slows down, and every course is a carefully orchestrated performance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
             <button className="btn-outline">Discover Our Story</button>
          </motion.div>
        </div>

        <div className={styles.images}>
          <motion.div className={styles.imgWrapper1} style={{ y: y1 }}>
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" alt="Restaurant Interior" />
          </motion.div>
          <motion.div className={styles.imgWrapper2} style={{ y: y2 }}>
            <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80" alt="Chef plating" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
