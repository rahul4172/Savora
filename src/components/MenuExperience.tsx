import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, Flame, Clock, Plus, Minus, Star, ArrowRight, 
  UtensilsCrossed, Wine, Fish, Coffee, Cake, 
  CalendarHeart, Clock4, Check, ChevronUp, ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './MenuExperience.module.css';

// --- DATA ---
const categories = [
  { id: 'Appetizers', icon: <Leaf size={14} /> },
  { id: 'Indian', icon: <UtensilsCrossed size={14} /> },
  { id: 'Italian', icon: <UtensilsCrossed size={14} /> },
  { id: 'Asian', icon: <UtensilsCrossed size={14} /> },
  { id: 'Chinese', icon: <UtensilsCrossed size={14} /> },
  { id: 'Seafood', icon: <Fish size={14} /> },
  { id: 'Grills', icon: <Flame size={14} /> },
  { id: 'Desserts', icon: <Cake size={14} /> },
  { id: 'Beverages', icon: <Coffee size={14} /> },
  { id: 'Wines', icon: <Wine size={14} /> }
];

type Dish = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  spiceLevel: number; 
  isChefRec: boolean;
  prepTime: string;
};

const menuData: Dish[] = [
  { id: '1', category: 'Appetizers', name: 'Saffron Butter Garlic Prawns', description: 'Jumbo prawns tossed in saffron infused butter, garlic and fresh herbs.', price: 1150, image: ''/images/saffron_risotto.png', isVeg: false, spiceLevel: 3, isChefRec: true, prepTime: '18 mins' },
  { id: '2', category: 'Appetizers', name: 'Truffle Burrata Salad', description: 'Creamy burrata, heirloom tomatoes, aged balsamic and black truffle.', price: 950, image: ''/images/dish_truffle_risotto.png', isVeg: true, spiceLevel: 0, isChefRec: false, prepTime: '12 mins' },
  { id: '3', category: 'Appetizers', name: 'Herb Crusted Lamb Chops', description: 'Australian lamb cutlets with rosemary crust, served with roasted vegetables.', price: 1350, image: ''/images/event_corporate.png', isVeg: false, spiceLevel: 2, isChefRec: true, prepTime: '20 mins' },
  { id: '4', category: 'Appetizers', name: 'Crispy Lotus Stem', description: 'Crispy lotus stem with spicy sichuan glaze.', price: 750, image: ''/images/dish_wagyu.png', isVeg: true, spiceLevel: 2, isChefRec: false, prepTime: '15 mins' },
  { id: '5', category: 'Appetizers', name: 'Tandoori Kalmi Kebab', description: 'Slow cooked chicken with aromatic Indian spices.', price: 850, image: ''/images/dish_lobster.png', isVeg: false, spiceLevel: 2, isChefRec: false, prepTime: '18 mins' },
  { id: '6', category: 'Appetizers', name: 'Wild Mushroom Crostini', description: 'Sautéed wild mushrooms, truffle oil, parmesan.', price: 820, image: ''/images/dish_caviar.png', isVeg: true, spiceLevel: 0, isChefRec: false, prepTime: '12 mins' },
];

export default function MenuExperience() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [cart, setCart] = useState<{ dish: Dish; quantity: number }[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const navigate = useNavigate();

  const filteredDishes = useMemo(() => {
    return menuData.filter(d => d.category === activeCategory);
  }, [activeCategory]);

  const handleQtyChange = (dishId: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[dishId] || 1;
      const next = Math.max(0, current + delta);
      return { ...prev, [dishId]: next };
    });
  };

  const handleCartQtyChange = (dishId: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.dish.id === dishId) {
          const next = Math.max(0, item.quantity + delta);
          return { ...item, quantity: next };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const handleAddToCart = (dish: Dish) => {
    const qty = quantities[dish.id] || 1;
    if (qty === 0) return;
    setCart(prev => {
      const existing = prev.find(item => item.dish.id === dish.id);
      if (existing) {
        return prev.map(item => 
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { dish, quantity: qty }];
    });
    // Reset local quantity after adding
    setQuantities(prev => ({ ...prev, [dish.id]: 1 }));
  };

  const isDishInCart = (dishId: string) => {
    return cart.some(item => item.dish.id === dishId);
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.dish.price * item.quantity), 0);
  const gst = subtotal * 0.05;
  const serviceCharge = subtotal * 0.075;
  const estimatedTotal = subtotal + gst + serviceCharge;

  return (
    <section className={styles.section}>
      
      {/* Cinematic Background */}
      <div className={styles.bgWrapper}>
        <img src="'/images/menu_bg.png' alt="Restaurant Background" className={styles.bgImage} />
        <div className={styles.bgOverlay}></div>
      </div>

      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <div className={styles.labelWrapper}>
            <div className={styles.labelLine}></div>
            <span className={styles.label}>OUR <span className={styles.fleur}>⚜</span> MENU</span>
            <div className={styles.labelLine}></div>
          </div>
          
          <h1 className={styles.mainTitle}>
            Curate Your <span className={styles.italicGold}>Dining Experience</span>
          </h1>
          
          <p className={styles.subtitle}>
            Explore our curated collection of world-class cuisines and pre-select your favorites before you reserve your table.<br/>
            A celebration of flavors, crafted for extraordinary evenings.
          </p>
          
          <button className={styles.chefSpecialBtn}>
            <Star size={14} /> View Chef's Specials <ArrowRight size={14} />
          </button>
        </div>

        {/* Category Tabs */}
        <div className={styles.tabsContainer}>
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`${styles.tabBtn} ${activeCategory === cat.id ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon} {cat.id}
            </button>
          ))}
        </div>

        {/* Layout: Main Grid & Sidebar */}
        <div className={styles.layout}>
          
          {/* Left: Catalogue */}
          <div className={styles.catalogue}>
            
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Signature {activeCategory}</h2>
              <div className={styles.sectionDivider}></div>
              <span className={styles.itemCount}>{filteredDishes.length} Exquisite Dishes</span>
            </div>

            <div className={styles.dishGrid}>
              <AnimatePresence mode="popLayout">
                {filteredDishes.length === 0 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.emptyState}>
                    No dishes available in this category yet.
                  </motion.div>
                ) : (
                  filteredDishes.map(dish => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      transition={{ duration: 0.4 }}
                      key={dish.id}
                      className={styles.dishCard}
                    >
                      <div className={styles.imageWrapper}>
                        <img src={dish.image} alt={dish.name} className={styles.dishImg} />
                        
                        {dish.isChefRec && (
                          <div className={styles.badgeTopLeft}>
                            <Star size={12} fill="currentColor" /> Chef's Recommendation
                          </div>
                        )}
                        
                        <div className={styles.badgeTopRight}>
                          <div className={styles.vegSquare} style={{ borderColor: dish.isVeg ? '#4ade80' : '#ef4444' }}>
                            <div className={styles.vegDot} style={{ background: dish.isVeg ? '#4ade80' : '#ef4444' }}></div>
                          </div>
                        </div>

                        <div className={styles.imageOverlay}></div>
                      </div>

                      <div className={styles.cardContent}>
                        <div className={styles.cardHeader}>
                          <h3 className={styles.dishName}>{dish.name}</h3>
                          <span className={styles.dishPrice}>₹{dish.price.toLocaleString('en-IN')}</span>
                        </div>

                        <p className={styles.dishDesc}>{dish.description}</p>

                        <div className={styles.metaRow}>
                          {dish.spiceLevel > 0 ? (
                            <span className={styles.metaBadge} style={{ color: '#f59e0b' }}>
                              {[...Array(dish.spiceLevel)].map((_, i) => <Flame key={i} size={14} fill="currentColor" />)}
                              <span className={styles.metaText}>Medium</span>
                            </span>
                          ) : (
                            <span className={styles.metaBadge} style={{ color: '#4ade80' }}>
                              <Leaf size={14} />
                              <span className={styles.metaText}>Vegetarian</span>
                            </span>
                          )}
                          <span className={styles.metaBadge}>
                            <Clock size={14} />
                            <span className={styles.metaText}>{dish.prepTime}</span>
                          </span>
                        </div>

                        <div className={styles.cardFooter}>
                          <div className={styles.qtySelector}>
                            <button onClick={() => handleQtyChange(dish.id, -1)}><Minus size={14}/></button>
                            <span>{quantities[dish.id] ?? 1}</span>
                            <button onClick={() => handleQtyChange(dish.id, 1)}><Plus size={14}/></button>
                          </div>
                          
                          {isDishInCart(dish.id) ? (
                            <button className={`${styles.addBtn} ${styles.addedBtn}`} onClick={() => handleAddToCart(dish)}>
                              Added <Check size={16} />
                            </button>
                          ) : (
                            <button className={styles.addBtn} onClick={() => handleAddToCart(dish)}>
                              Add to Dining Experience
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className={`${styles.orderSummaryWrapper} ${isMobileCartOpen ? styles.cartOpen : ''}`}>
            
            <button className={styles.mobileCartToggle} onClick={() => setIsMobileCartOpen(!isMobileCartOpen)}>
              <div className={styles.mobileCartToggleInfo}>
                <span className={styles.mobileCartTotal}>₹{Math.floor(estimatedTotal).toLocaleString('en-IN')}</span>
                <span className={styles.mobileCartItems}>{cart.length} Items</span>
              </div>
              <span className={styles.mobileCartAction}>
                {isMobileCartOpen ? 'Close Cart' : 'View Cart'}
                {isMobileCartOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
              </span>
            </button>

            <div className={styles.orderSummary}>
              
              <div className={styles.summaryHeader}>
                <div className={styles.summaryTitleRow}>
                  <UtensilsCrossed size={24} strokeWidth={1} className={styles.goldIcon} />
                  <div>
                    <h3>Your Dining Experience</h3>
                    <p>Crafting your perfect evening</p>
                  </div>
                </div>
                <div className={styles.itemBadge}>{cart.length} Items</div>
              </div>

              <div className={styles.cartItems}>
                <AnimatePresence>
                  {cart.length === 0 ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.emptyCart}>
                      No dishes selected yet.
                    </motion.div>
                  ) : (
                    cart.map(item => (
                      <motion.div 
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0, margin: 0, overflow: 'hidden' }}
                        key={item.dish.id} 
                        className={styles.cartItem}
                      >
                        <img src={item.dish.image} alt={item.dish.name} className={styles.cartThumb} />
                        <div className={styles.cartItemInfo}>
                          <div className={styles.cartItemHeader}>
                            <span className={styles.cartItemName}>{item.dish.name}</span>
                            <span className={styles.cartItemPrice}>₹{(item.dish.price * item.quantity).toLocaleString('en-IN')}</span>
                          </div>
                          <div className={styles.cartQtySelector}>
                            <button onClick={() => handleCartQtyChange(item.dish.id, -1)}><Minus size={12}/></button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleCartQtyChange(item.dish.id, 1)}><Plus size={12}/></button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              <div className={styles.summaryBreakdown}>
                <div className={styles.costRow}>
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className={styles.costRowMeta}>
                  <span>GST (5%)</span>
                  <span>₹{Math.floor(gst).toLocaleString('en-IN')}</span>
                </div>
                <div className={styles.costRowMeta}>
                  <span>Service Charge (7.5%)</span>
                  <span>₹{Math.floor(serviceCharge).toLocaleString('en-IN')}</span>
                </div>
                
                <div className={styles.totalDivider}></div>
                
                <div className={styles.totalRow}>
                  <span>Estimated Total</span>
                  <span className={styles.totalPrice}>₹{Math.floor(estimatedTotal).toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <div className={styles.summaryFooter}>
                <button 
                  className={styles.reserveBtn} 
                  disabled={cart.length === 0}
                  onClick={() => navigate('/reservation')}
                >
                  Continue to Book a Table <ArrowRight size={16} />
                </button>
                <div className={styles.securityMsg}>
                  <Star size={10} fill="currentColor" /> Your selected dishes will be saved for your reservation
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomBarTitle}>Why Pre-Select Your Meal?</div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <Clock4 size={20} className={styles.goldIcon} />
              <div>
                <h4>Faster Service</h4>
                <p>No waiting after arrival</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <CalendarHeart size={20} className={styles.goldIcon} />
              <div>
                <h4>Guaranteed Availability</h4>
                <p>Your favorites, reserved</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <Star size={20} className={styles.goldIcon} />
              <div>
                <h4>Personalized Experience</h4>
                <p>Curated for your evening</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <UtensilsCrossed size={20} className={styles.goldIcon} />
              <div>
                <h4>Seamless Dining</h4>
                <p>Sit back and enjoy</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


