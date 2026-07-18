import { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './SpecialtiesSection.module.css';
import { ArrowRight, ArrowLeft, Heart, Flame, WheatOff, Leaf, ChefHat, Award, Plus, Sparkles } from 'lucide-react';

const Star = ({ size }: { size: number }) => (
  <Sparkles size={size} />
);

// Helper to use a custom SVG for the flower icon instead of standard lucide
const FlowerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 15 5 15 9C15 11.5 13.5 13 12 13C10.5 13 9 11.5 9 9C9 5 12 2 12 2Z" fill="currentColor"/>
    <path d="M22 12C22 12 19 9 15 9C12.5 9 11 10.5 11 12C11 13.5 12.5 15 15 15C19 15 22 12 22 12Z" fill="currentColor"/>
    <path d="M12 22C12 22 9 19 9 15C9 12.5 10.5 11 12 11C13.5 11 15 12.5 15 15C15 19 12 22 12 22Z" fill="currentColor"/>
    <path d="M2 12C2 12 5 15 9 15C11.5 15 13 13.5 13 12C13 10.5 11.5 9 9 9C5 9 2 12 2 12Z" fill="currentColor"/>
    <circle cx="12" cy="12" r="1.5" fill="var(--color-bg)"/>
  </svg>
);

const dishes = [
  {
    id: 1,
    badgeText: 'CHEF\'S SPECIAL',
    badgeIcon: <ChefHat size={12} />,
    image: '/images/scallops.png',
    title: 'Truffle Butter Scallops',
    tags: [
      { icon: <WheatOff size={12} />, text: 'Gluten Free' },
      { icon: <Flame size={12} />, text: '320 Cal' }
    ],
    desc: 'Seared scallops with black truffle butter, cauliflower puree and micro greens.',
    price: '₹ 1,850'
  },
  {
    id: 2,
    badgeText: 'BEST SELLER',
    badgeIcon: <Star size={12} />,
    image: '/images/ravioli.png',
    title: 'Lobster Ravioli',
    tags: [
      { icon: <Award size={12} />, text: 'Signature' },
      { icon: <Flame size={12} />, text: '450 Cal' }
    ],
    desc: 'Delicate handmade lobster ravioli in a rich saffron cream sauce.',
    price: '₹ 2,450'
  },
  {
    id: 3,
    badgeText: 'NEW ARRIVAL',
    badgeIcon: <Leaf size={12} />,
    image: '/images/chocolate.png',
    title: 'Chocolate Sphere',
    tags: [
      { icon: <Leaf size={12} />, text: 'Vegetarian' },
      { icon: <Flame size={12} />, text: '410 Cal' }
    ],
    desc: 'Dark chocolate mousse, hazelnut praline and berry coulis.',
    price: '₹ 1,250'
  },
  {
    id: 4,
    badgeText: 'EXCLUSIVE',
    badgeIcon: <Award size={12} />,
    image: '/images/caviar.png',
    title: 'Beluga Caviar Blini',
    tags: [
      { icon: <Star size={12} />, text: 'Premium' },
      { icon: <Flame size={12} />, text: '180 Cal' }
    ],
    desc: 'Elegant dollop of black beluga caviar on a crisp blini with crème fraîche.',
    price: '₹ 4,200'
  },
  {
    id: 5,
    badgeText: 'VEGAN',
    badgeIcon: <Leaf size={12} />,
    image: '/images/risotto.png',
    title: 'Golden Saffron Risotto',
    tags: [
      { icon: <Leaf size={12} />, text: 'Vegan' },
      { icon: <Flame size={12} />, text: '380 Cal' }
    ],
    desc: 'Perfectly creamy saffron risotto garnished with a single gold leaf.',
    price: '₹ 1,650'
  }
];

const features = [
  {
    icon: <Leaf size={20} strokeWidth={1.5} />,
    title: 'Finest Ingredients',
    desc: 'Sourced from around the world'
  },
  {
    icon: <ChefHat size={20} strokeWidth={1.5} />,
    title: 'Culinary Artistry',
    desc: 'Crafted by Michelin trained chefs'
  },
  {
    icon: <Flame size={20} strokeWidth={1.5} />,
    title: 'Seasonal Menu',
    desc: 'Fresh ingredients changed seasonally'
  },
  {
    icon: <Award size={20} strokeWidth={1.5} />,
    title: 'Exclusive Experience',
    desc: 'Designed for unforgettable moments'
  }
];

export default function SpecialtiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const scrollContainer = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section} ref={containerRef}>
      {/* Background Floral Overlay (simulated with large faint script or gradient) */}
      <div className={styles.bgGlow}></div>
      
      <div className="content-wrapper">
        <div className={styles.topLayout}>
          
          {/* LEFT COLUMN - Typography & Info */}
          <motion.div 
            className={styles.leftCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className={styles.badgeLabel}>
              <FlowerIcon />
              <span>CHEF'S SPECIAL</span>
            </div>
            
            <h2 className={styles.titleGroup}>
              <span className={styles.titleSerif}>Signature</span>
              <span className={styles.titleScript}>Dishes</span>
            </h2>
            
            <div className={styles.ornament}>
              <FlowerIcon />
            </div>
            
            <p className={styles.description}>
              Experience culinary excellence with our chef's handpicked creations, crafted with the finest ingredients and inspired by global flavors.
            </p>
            
            <Link to="/menu" className={styles.linkMenu}>
              PRE-SELECT YOUR DISH <ArrowRight size={16} />
            </Link>
             <div className={styles.socialAndNav}>
              <div className={styles.socialProof}>
                <div className={styles.avatars}>
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Guest" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Guest" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Guest" />
                </div>
                <div className={styles.proofText}>
                  <span className={styles.proofCount}>25K+</span>
                  <span className={styles.proofLabel}>Happy Guests</span>
                </div>
              </div>
              
              <div className={styles.navControls}>
                <button 
                  className={styles.navBtn}
                  onClick={() => scrollContainer('left')}
                >
                  <ArrowLeft size={16} />
                </button>
                <button 
                  className={styles.navBtn}
                  onClick={() => scrollContainer('right')}
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Carousel Cards */}
          <div className={styles.carouselWrapper} ref={carouselRef}>
            <div className={styles.rightCol}>
              {dishes.map((dish, i) => (
                <motion.div 
                  key={dish.id} 
                  className={styles.dishCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                <div className={styles.cardImageWrapper}>
                  <img src={dish.image} alt={dish.title} className={styles.cardImg} />
                  <div className={styles.cardBadge}>
                    {dish.badgeIcon} {dish.badgeText}
                  </div>
                  <button className={styles.heartBtn}>
                    <Heart size={16} strokeWidth={1.5} />
                  </button>
                  {/* Subtle fade at bottom of image */}
                  <div className={styles.imageFade}></div>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.cardGoldLine}></div>
                  <h3 className={styles.cardTitle}>{dish.title}</h3>
                  
                  <div className={styles.cardTags}>
                    {dish.tags.map((tag, idx) => (
                      <div key={idx} className={styles.tag}>
                        <span className={styles.tagIcon}>{tag.icon}</span>
                        {tag.text}
                      </div>
                    ))}
                  </div>
                  
                  <p className={styles.cardDesc}>{dish.desc}</p>
                  
                  <div className={styles.cardFooter}>
                    <span className={styles.price}>{dish.price}</span>
                    <button className={styles.addBtn}>
                      <Plus size={16} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>

        </div>

        {/* BOTTOM FEATURES BAR */}
        <motion.div 
          className={styles.featuresBar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {features.map((feat, i) => (
            <div key={i} className={styles.featureItem}>
              <div className={styles.featIconWrapper}>
                {feat.icon}
              </div>
              <div className={styles.featText}>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
