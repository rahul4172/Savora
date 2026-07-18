import { motion } from 'framer-motion';
import styles from './SignatureDishes.module.css';
import { ArrowRight, Heart } from 'lucide-react';

const dishes = [
  {
    badge: 'CHEF\'S SPECIAL',
    name: 'Truffle Butter Scallops',
    desc: 'Seared scallops with truffle butter, cauliflower puree and micro greens.',
    price: '₹ 1,850',
    img: ''/images/truffle_scallops.png'
  },
  {
    badge: 'BEST SELLER',
    name: 'Wagyu Tenderloin',
    desc: 'A5 wagyu with red wine jus, grilled asparagus and roasted garlic.',
    price: '₹ 2,950',
    img: ''/images/dish_wagyu.png'
  },
  {
    badge: 'NEW ARRIVAL',
    name: 'Chocolate Sphere',
    desc: 'Dark chocolate mousse, hazelnut praline, and berry coulis.',
    price: '₹ 1,250',
    img: ''/images/dish_lobster.png'
  },
  {
    badge: 'CHEF\'S SPECIAL',
    name: 'Lobster Thermidor',
    desc: 'Classic thermidor sauce, mornay, truffle oil and parmesan crisp.',
    price: '₹ 2,450',
    img: ''/images/dish_caviar.png'
  }
];

export default function SignatureDishes() {
  return (
    <section className="section-padding">
      <div className="content-wrapper">
        <div className={styles.layout}>
          
          {/* Left Text */}
          <div className={styles.textSide}>
            <span className={styles.subtitle}>CHEF'S SPECIAL</span>
            <h2 className={styles.title}>Signature Dishes</h2>
            <p className={styles.desc}>Experience culinary excellence with our chef's handpicked creations.</p>
            <button className={styles.linkBtn}>
              VIEW FULL MENU <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Cards */}
          <div className={styles.cardsSide}>
            <div className={styles.cardsContainer}>
              {dishes.map((dish, i) => (
                <motion.div 
                  className={styles.card} 
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={styles.imageContainer}>
                    <img src={dish.img} alt={dish.name} />
                    <div className={styles.cardOverlay}></div>
                    <div className={styles.cardTop}>
                      <span className={styles.badge}>{dish.badge}</span>
                      <button className={styles.heartBtn}><Heart size={18} /></button>
                    </div>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <h3>{dish.name}</h3>
                    <p>{dish.desc}</p>
                    <div className={styles.price}>{dish.price}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

