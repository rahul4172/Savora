import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Play, Flower2 } from 'lucide-react';
import styles from './GalleryExperience.module.css';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: ''/images/gallery_ambience.png',
    label: 'Evening Ambience',
    colSpan: 'span 7',
    rowSpan: 'span 2',
    aspect: '16/9'
  },
  {
    id: 2,
    type: 'image',
    src: ''/images/chef_portrait.png',
    label: 'The Culinary Artist',
    colSpan: 'span 5',
    rowSpan: 'span 3',
    aspect: '3/4'
  },
  {
    id: 3,
    type: 'video',
    src: ''/images/menu_bg.png',
    label: 'Behind The Scenes',
    duration: '01:45',
    colSpan: 'span 4',
    rowSpan: 'span 2',
    aspect: '1/1'
  },
  {
    id: 4,
    type: 'image',
    src: ''/images/truffle_scallops.png',
    label: "Chef's Signature",
    colSpan: 'span 3',
    rowSpan: 'span 2',
    aspect: '3/4'
  },
  {
    id: 5,
    type: 'image',
    src: ''/images/gallery_wine.png',
    label: 'Wine Experience',
    colSpan: 'span 5',
    rowSpan: 'span 2',
    aspect: '4/3'
  },
  {
    id: 6,
    type: 'video',
    src: ''/images/event_chef_table.png',
    label: 'Fire & Passion',
    duration: '00:58',
    colSpan: 'span 12',
    rowSpan: 'span 3',
    aspect: '21/9'
  },
  {
    id: 7,
    type: 'image',
    src: ''/images/dish_caviar.png',
    label: 'Dessert Finale',
    colSpan: 'span 4',
    rowSpan: 'span 2',
    aspect: '1/1'
  },
  {
    id: 8,
    type: 'image',
    src: ''/images/event_corporate.png',
    label: 'Private Events',
    colSpan: 'span 4',
    rowSpan: 'span 2',
    aspect: '4/5'
  },
  {
    id: 9,
    type: 'image',
    src: ''/images/dish_wagyu.png',
    label: 'Seasonal Collection',
    colSpan: 'span 4',
    rowSpan: 'span 2',
    aspect: '1/1'
  }
];

export default function GalleryExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className={styles.section} ref={sectionRef}>
      
      {/* Ambient background effects */}
      <div className={styles.ambientGlow}></div>
      <div className={styles.noiseOverlay}></div>

      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <motion.div 
            className={styles.labelWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Flower2 size={12} className={styles.goldIcon} strokeWidth={2} /> 
            <span className={styles.label}>GALLERY EXPERIENCE</span>
          </motion.div>

          <motion.h1 
            className={styles.mainTitle}
            style={{ y: titleY }}
          >
            Every Frame<br />
            Tells<br />
            A <span className={styles.handwritten}>Story.</span>
          </motion.h1>

          <motion.p 
            className={styles.intro}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Discover the atmosphere, artistry and unforgettable moments that make every evening at Savora an extraordinary experience.
          </motion.p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className={styles.editorialGrid}>
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${styles.gridItem} ${item.type === 'video' ? styles.videoItem : ''}`}
              style={{
                gridColumn: item.colSpan,
                gridRow: item.rowSpan,
                aspectRatio: item.aspect
              }}
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.19, 1, 0.22, 1],
                delay: (index % 3) * 0.15 
              }}
            >
              <div className={styles.imageWrapper}>
                <img src={item.src} alt={item.label} className={styles.image} />
                
                {/* Lighting gradient that moves on hover */}
                <div className={styles.hoverLighting}></div>
                
                {/* Video Play Button Overlay */}
                {item.type === 'video' && (
                  <div className={styles.videoOverlay}>
                    <div className={styles.playBtnGlass}>
                      <Play size={20} className={styles.playIcon} fill="#fff" />
                    </div>
                    <div className={styles.videoDuration}>{item.duration}</div>
                  </div>
                )}

                {/* Glass Information Overlay */}
                <div className={styles.glassLabelContainer}>
                  <div className={styles.glassLabel}>
                    <span className={styles.labelText}>{item.label}</span>
                    <div className={styles.arrowCircle}>
                      <ArrowUpRight size={14} className={styles.arrowIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

