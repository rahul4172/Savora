import { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, User, Wine, Gift, FileText, ChevronDown, ArrowRight, ShieldCheck, 
  Car, DoorOpen, Music, ChefHat, CheckCircle, Phone, Headset, Info, Flower2,
  Sparkles, Flame, Plus, Minus, X
} from 'lucide-react';
import styles from './ReservationExperience.module.css';

const tables = [
  // Chef's Table
  { id: '01', type: 'chef', x: 50, y: 26.5, state: 'vip', seats: 8 },
  
  // Top Booths
  { id: '02', type: 'booth', x: 9, y: 13, state: 'occupied', seats: 4 },
  { id: '03', type: 'booth', x: 9, y: 29, state: 'available', seats: 4 },
  { id: '04', type: 'booth', x: 91, y: 13, state: 'reserved', seats: 4 },
  { id: '05', type: 'booth', x: 91, y: 29, state: 'available', seats: 4 },
  
  // Left Wing
  { id: '06', type: 'round', x: 40, y: 39, state: 'available', seats: 4 },
  { id: '07', type: 'long', x: 18.5, y: 43.5, state: 'occupied', seats: 6 },
  { id: '08', type: 'round', x: 10, y: 44, state: 'available', seats: 4 },
  { id: '28', type: 'square', x: 18.5, y: 58.5, state: 'available', seats: 4 }, 
  
  // Right Wing
  { id: '09', type: 'round', x: 60, y: 39, state: 'reserved', seats: 4 },
  { id: '10', type: 'long', x: 81.5, y: 43.5, state: 'vip', seats: 6 },
  { id: '11', type: 'round', x: 90, y: 44, state: 'available', seats: 4 },
  { id: '29', type: 'square', x: 81.5, y: 58.5, state: 'available', seats: 4 }, 
  
  // Lower Mid
  { id: '12', type: 'round', x: 40, y: 56, state: 'available', seats: 4 },
  { id: '13', type: 'round', x: 60, y: 56, state: 'occupied', seats: 4 },
  { id: '14', type: 'booth', x: 18.5, y: 71.5, state: 'available', seats: 4 },
  { id: '15', type: 'booth', x: 81.5, y: 71.5, state: 'reserved', seats: 4 },
  
  // Terrace Left Edge
  { id: '16', type: 'square', x: 10.5, y: 58.5, state: 'available', seats: 2 },
  { id: '17', type: 'square', x: 6.5, y: 68.5, state: 'available', seats: 2 },
  { id: '18', type: 'square', x: 6.5, y: 78.5, state: 'occupied', seats: 2 },
  
  // Terrace Right Edge
  { id: '19', type: 'square', x: 89.5, y: 58.5, state: 'available', seats: 2 },
  { id: '20', type: 'square', x: 93.5, y: 68.5, state: 'available', seats: 2 },
  { id: '21', type: 'square', x: 93.5, y: 78.5, state: 'reserved', seats: 2 },
  
  // Terrace Bottom Inner Row
  { id: '30', type: 'square', x: 15, y: 82.5, state: 'available', seats: 2 },
  { id: '31', type: 'square', x: 22, y: 82.5, state: 'available', seats: 2 },
  { id: '32', type: 'square', x: 78, y: 82.5, state: 'occupied', seats: 2 },
  { id: '33', type: 'square', x: 85, y: 82.5, state: 'available', seats: 2 },

  // Terrace Bottom Edge
  { id: '22', type: 'square', x: 8.5, y: 91.5, state: 'available', seats: 2 },
  { id: '23', type: 'square', x: 19.5, y: 91.5, state: 'available', seats: 2 },
  { id: '24', type: 'square', x: 31, y: 91.5, state: 'occupied', seats: 2 },
  { id: '25', type: 'square', x: 69, y: 91.5, state: 'available', seats: 2 },
  { id: '26', type: 'square', x: 80.5, y: 91.5, state: 'available', seats: 2 },
  { id: '27', type: 'square', x: 91.5, y: 91.5, state: 'reserved', seats: 2 },
];

const features = [
  { icon: <Car size={16} strokeWidth={1.5} />, text: 'Complimentary Valet Parking' },
  { icon: <Wine size={16} strokeWidth={1.5} />, text: 'Sommelier Wine Pairing' },
  { icon: <DoorOpen size={16} strokeWidth={1.5} />, text: 'Private Dining Rooms' },
  { icon: <Music size={16} strokeWidth={1.5} />, text: 'Live Piano Evenings' },
  { icon: <ChefHat size={16} strokeWidth={1.5} />, text: "Chef's Seasonal Tasting Menu" },
  { icon: <CheckCircle size={16} strokeWidth={1.5} />, text: 'Reservations Confirmed Instantly' },
];

const featuredDishes = [
  { id: 'd1', name: 'Wagyu Tenderloin', desc: 'A5 Japanese Wagyu, truffle mash, red wine jus', price: 4500, img: ''/images/event_corporate.png', isVeg: false, spice: 0, isChefRec: true },
  { id: 'd2', name: 'Truffle Pasta', desc: 'Handmade taglionini, shaved black truffle, parmesan', price: 1850, img: ''/images/dish_truffle_risotto.png', isVeg: true, spice: 0, isChefRec: true },
  { id: 'd3', name: 'Chocolate Sphere', desc: 'Valrhona chocolate, melting caramel, gold leaf', price: 1100, img: ''/images/chocolate_sphere.png', isVeg: true, spice: 0, isChefRec: false },
  { id: 'd4', name: 'Saffron Prawns', desc: 'Jumbo prawns, saffron butter, garlic, fresh herbs', price: 1150, img: ''/images/saffron_risotto.png', isVeg: false, spice: 3, isChefRec: true },
];

export default function ReservationExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Floor Plan States
  const [hoveredTable, setHoveredTable] = useState<any>(null);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  // Form States
  const [guests, setGuests] = useState(2);
  const [area, setArea] = useState('Indoor');
  const [date, setDate] = useState('17 May, 2025');
  const [time, setTime] = useState('7:30 PM');
  const [occasion, setOccasion] = useState('Anniversary');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Menu Extension States
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState<Record<string, number>>({});
  
  // Confirmation State
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Handlers
  const handleTableClick = (table: any) => {
    if (table.state === 'available') {
      setSelectedTable(table.id);
      if (Number(table.id) >= 16) {
        setArea('Terrace');
      } else if (Number(table.id) === 1 || Number(table.id) === 10) {
        setArea('Private');
      } else {
        setArea('Indoor');
      }
    }
  };

  const handleQtyChange = (id: string, delta: number) => {
    setSelectedDishes(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const selectedItems = useMemo(() => {
    return Object.entries(selectedDishes).map(([id, qty]) => {
      const dish = featuredDishes.find(d => d.id === id);
      return { dish, qty };
    }).filter(item => item.dish !== undefined) as { dish: typeof featuredDishes[0], qty: number }[];
  }, [selectedDishes]);

  const foodTotal = selectedItems.reduce((acc, item) => acc + (item.dish.price * item.qty), 0);
  const totalItems = selectedItems.reduce((acc, item) => acc + item.qty, 0);

  // SUCCESS SCREEN
  if (isConfirmed) {
    return (
      <section className={styles.section}>
        <div className={styles.ambientGlow}></div>
        <div className={styles.particlesContainer}></div>
        
        <div className={styles.successContainer}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={styles.successCard}
          >
            <div className={styles.successIconWrapper}>
              <CheckCircle size={40} className={styles.successIcon} strokeWidth={1} />
            </div>
            
            <h2 className={styles.successTitle}>Reservation Confirmed</h2>
            <p className={styles.successSub}>We look forward to welcoming you to Savora.</p>
            
            <div className={styles.summaryBlock}>
              <div className={styles.summaryRow}>
                <span>Booking ID</span>
                <span className={styles.summaryVal}>#SVR-8842-X</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Date & Time</span>
                <span className={styles.summaryVal}>{date}, {time}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Guests</span>
                <span className={styles.summaryVal}>{guests} People</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Occasion</span>
                <span className={styles.summaryVal}>{occasion}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Reserved Table</span>
                <span className={styles.summaryVal}>{selectedTable ? `Table ${selectedTable} (${area})` : `Best Available (${area})`}</span>
              </div>
            </div>

            {selectedItems.length > 0 && (
              <div className={styles.diningExperienceSummary}>
                <div className={styles.diningSummaryTitle}>
                  <Sparkles size={14} className={styles.goldIcon} /> Dining Experience
                </div>
                <div className={styles.diningSummaryList}>
                  {selectedItems.map(item => (
                    <div key={item.dish.id} className={styles.diningSummaryItem}>
                      <span>✔ {item.dish.name} ×{item.qty}</span>
                      <span>₹{(item.dish.price * item.qty).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.diningSummaryTotal}>
                  <span>Estimated Food Total</span>
                  <span className={styles.goldVal}>₹{foodTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            )}

            <div className={styles.qrBlock}>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SVR-8842-X&bgcolor=15-15-15&color=C5A059" alt="Reservation QR" className={styles.qrCode} />
              <p>Present this code upon arrival</p>
            </div>
            
            <button className={styles.downloadBtn} onClick={() => setIsConfirmed(false)}>
              DOWNLOAD CONFIRMATION
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  // MAIN SCREEN
  return (
    <section className={styles.section} ref={containerRef} onClick={() => setActiveDropdown(null)}>
      <div className={styles.ambientGlow}></div>
      <div className={styles.particlesContainer}></div>

      <div className="content-wrapper">
        <div className={styles.mainGrid}>
          
          {/* 1. LEFT COLUMN: Header & Form */}
          <div className={styles.leftCol}>
            <div className={styles.label}>
              <Flower2 size={12} className={styles.goldIcon} strokeWidth={2} /> RESERVATION EXPERIENCE
            </div>

            <h2 className={styles.heading}>
              Reserve More<br />
              Than A Table.<br />
              <span className={styles.headingItalic}>Reserve An Experience.</span>
            </h2>

            <div className={styles.divider}>
              <div className={styles.line}></div>
              <Flower2 size={14} className={styles.goldIcon} strokeWidth={1.5} />
              <div className={styles.line}></div>
            </div>

            <p className={styles.intro}>
              Every reservation is thoughtfully prepared by our team to ensure an evening tailored to your preferences, from seating location to curated culinary experiences.
            </p>

            <div className={styles.formCard}>
              <div className={styles.formRow}>
                {/* DATE DROPDOWN */}
                <div className={styles.inputGroup}>
                  <label><Calendar size={14} /> DATE</label>
                  <div className={styles.dropdownContainer}>
                    <div 
                      className={`${styles.inputBox} ${activeDropdown === 'date' ? styles.inputBoxActive : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'date' ? null : 'date'); }}
                    >
                      <span>{date}</span>
                      <ChevronDown size={14} className={styles.chevron} />
                    </div>
                    <AnimatePresence>
                      {activeDropdown === 'date' && (
                        <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className={styles.dropdownMenu}>
                          {['17 May, 2025', '18 May, 2025', '19 May, 2025', '20 May, 2025'].map(d => (
                            <div key={d} className={styles.dropdownItem} onClick={() => { setDate(d); setActiveDropdown(null); }}>{d}</div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* TIME DROPDOWN */}
                <div className={styles.inputGroup}>
                  <label><Clock size={14} /> TIME</label>
                  <div className={styles.dropdownContainer}>
                    <div 
                      className={`${styles.inputBox} ${activeDropdown === 'time' ? styles.inputBoxActive : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'time' ? null : 'time'); }}
                    >
                      <span>{time}</span>
                      <ChevronDown size={14} className={styles.chevron} />
                    </div>
                    <AnimatePresence>
                      {activeDropdown === 'time' && (
                        <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className={styles.dropdownMenu}>
                          {['6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'].map(t => (
                            <div key={t} className={styles.dropdownItem} onClick={() => { setTime(t); setActiveDropdown(null); }}>{t}</div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                {/* GUESTS */}
                <div className={styles.inputGroup}>
                  <label><User size={14} /> GUESTS</label>
                  <div className={styles.stepperBox}>
                    <button onClick={() => setGuests(Math.max(1, guests - 1))}>−</button>
                    <span>{guests} Guests</span>
                    <button onClick={() => setGuests(Math.min(12, guests + 1))}>+</button>
                  </div>
                </div>

                {/* DINING AREA */}
                <div className={styles.inputGroup}>
                  <label><Wine size={14} /> DINING AREA</label>
                  <div className={styles.segmentControl}>
                    {['Indoor', 'Terrace', 'Private'].map(a => (
                      <button 
                        key={a}
                        className={area === a ? styles.segmentActive : ''}
                        onClick={() => { setArea(a); setSelectedTable(null); }}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                {/* OCCASION DROPDOWN */}
                <div className={styles.inputGroup}>
                  <label><Gift size={14} /> OCCASION</label>
                  <div className={styles.dropdownContainer}>
                    <div 
                      className={`${styles.inputBox} ${activeDropdown === 'occasion' ? styles.inputBoxActive : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'occasion' ? null : 'occasion'); }}
                    >
                      <span>{occasion}</span>
                      <ChevronDown size={14} className={styles.chevron} />
                    </div>
                    <AnimatePresence>
                      {activeDropdown === 'occasion' && (
                        <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className={styles.dropdownMenu}>
                          {['None', 'Birthday', 'Anniversary', 'Corporate Dinner', 'Family Dinner', 'Other'].map(occ => (
                            <div key={occ} className={styles.dropdownItem} onClick={() => { setOccasion(occ); setActiveDropdown(null); }}>{occ}</div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label><FileText size={14} /> SPECIAL REQUESTS</label>
                <div className={styles.inputBox}>
                  <input type="text" placeholder="Any special request?" className={styles.textInput} />
                </div>
              </div>

              {/* NEW: Pre-Select Dishes Panel */}
              <div className={styles.preSelectPanel}>
                <div className={styles.preSelectHeader}>
                  <div className={styles.preSelectTitle}>
                    <Sparkles size={16} className={styles.goldIcon} /> 
                    <span>Pre-Select Your Dining Experience (Optional)</span>
                  </div>
                  <p>Reserve your favourite dishes in advance and we'll have everything prepared for your arrival.</p>
                  
                  {!isMenuExpanded && (
                    <button className={styles.exploreBtn} onClick={() => setIsMenuExpanded(true)}>
                      Explore Menu
                    </button>
                  )}
                </div>

                <AnimatePresence>
                  {isMenuExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className={styles.carouselWrapper}
                    >
                      <div className={styles.carouselNav}>
                        <span>Featured Menu</span>
                        <button className={styles.closeMenuBtn} onClick={() => setIsMenuExpanded(false)}>
                          <X size={14} /> Close
                        </button>
                      </div>
                      
                      <div className={styles.carouselContainer} ref={carouselRef}>
                        {featuredDishes.map(dish => (
                          <div key={dish.id} className={styles.carouselCard}>
                            <div className={styles.cardImageWrapper}>
                              <img src={dish.img} alt={dish.name} className={styles.cardImg} />
                              {dish.isChefRec && (
                                <div className={styles.badgeTopLeft}>
                                  <ChefHat size={10} fill="currentColor" /> Chef's Signature
                                </div>
                              )}
                              <div className={styles.badgeTopRight}>
                                <div className={styles.vegSquare} style={{ borderColor: dish.isVeg ? '#4ade80' : '#ef4444' }}>
                                  <div className={styles.vegDot} style={{ background: dish.isVeg ? '#4ade80' : '#ef4444' }}></div>
                                </div>
                              </div>
                            </div>
                            
                            <div className={styles.cardBody}>
                              <div className={styles.cardHeaderRow}>
                                <h4>{dish.name}</h4>
                                <span className={styles.cardPrice}>₹{dish.price.toLocaleString('en-IN')}</span>
                              </div>
                              <p className={styles.cardDesc}>{dish.desc}</p>
                              
                              <div className={styles.metaRow}>
                                {dish.spice > 0 && (
                                  <span className={styles.metaBadge} style={{ color: '#f59e0b' }}>
                                    {[...Array(dish.spice)].map((_, i) => <Flame key={i} size={12} fill="currentColor" />)}
                                  </span>
                                )}
                              </div>
                              
                              <div className={styles.cardActionRow}>
                                <div className={styles.qtySelector}>
                                  <button onClick={() => handleQtyChange(dish.id, -1)}><Minus size={12}/></button>
                                  <span>{selectedDishes[dish.id] || 0}</span>
                                  <button onClick={() => handleQtyChange(dish.id, 1)}><Plus size={12}/></button>
                                </div>
                                <button className={styles.addBtn} onClick={() => handleQtyChange(dish.id, 1)}>
                                  {selectedDishes[dish.id] ? 'Add More' : 'Add'}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button className={styles.submitBtn} onClick={() => setIsConfirmed(true)}>
                RESERVE YOUR EVENING <ArrowRight size={16} />
                <div className={styles.btnShimmer}></div>
              </button>

              <div className={styles.trustBadges}>
                <ShieldCheck size={12} /> Instant Confirmation <span className={styles.dot}>•</span> No Hidden Charges <span className={styles.dot}>•</span> Secure Booking
              </div>
            </div>
          </div>

          {/* 2. CENTER COLUMN: Interactive Floor Plan */}
          <div className={styles.centerCol}>
            
            <div className={styles.liveWidget}>
              <div className={styles.liveHeader}>
                <div className={styles.liveDot}></div> LIVE AVAILABILITY
              </div>
              <div className={styles.liveCount}>
                {tables.filter(t => t.state === 'available').length} Tables Available
              </div>
              <div className={styles.liveSub}>Tonight</div>
              <div className={styles.liveUpdate}>Updating every minute</div>
              <div className={styles.waveform}>
                {[...Array(30)].map((_, i) => (
                  <div key={i} className={styles.waveBar} style={{ height: `${Math.random() * 10 + 2}px` }}></div>
                ))}
              </div>
            </div>

            <div className={styles.floorPlanContainer}>
              <img src="/images/floor_plan.png" alt="Restaurant Floor Plan" className={styles.floorPlanImg} />
              
              <div className={styles.svgOverlay}>
                {tables.map(table => (
                  <div 
                    key={table.id}
                    className={`${styles.tableMarker} ${styles[`state_${table.state}`]} ${table.id === selectedTable ? styles.selectedTable : ''}`}
                    style={{ left: `${table.x}%`, top: `${table.y}%` }}
                    onMouseEnter={() => setHoveredTable(table)}
                    onMouseLeave={() => setHoveredTable(null)}
                    onClick={() => handleTableClick(table)}
                  >
                    {table.id}
                  </div>
                ))}
              </div>

              <AnimatePresence>
                {hoveredTable && (
                  <motion.div 
                    className={styles.tooltip}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    style={{ left: `${hoveredTable.x}%`, top: `${hoveredTable.y - 8}%` }}
                  >
                    Table {hoveredTable.id} <span className={`${styles.badge} ${styles[`badge_${hoveredTable.state}`]}`}>{hoveredTable.state}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Show Selected Table Hint */}
            <AnimatePresence>
              {selectedTable && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={styles.selectedTableHint}
                >
                  <CheckCircle size={14} color="#4caf50" /> Table {selectedTable} Selected
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* 3. RIGHT COLUMN: Legends and Features */}
          <div className={styles.rightCol}>
            
            <div className={styles.legendCard}>
              <div className={styles.legendTitle}>TABLE STATUS</div>
              <div className={styles.legendRow}><span className={`${styles.legendDot} ${styles.bgAvailable}`}></span> Available</div>
              <div className={styles.legendRow}><span className={`${styles.legendDot} ${styles.bgReserved}`}></span> Reserved</div>
              <div className={styles.legendRow}><span className={`${styles.legendDot} ${styles.bgOccupied}`}></span> Occupied</div>
              <div className={styles.legendRow}><span className={`${styles.legendDot} ${styles.bgVip}`}><ChefHat size={10} color="#000" /></span> VIP / Premium</div>
              
              <div className={styles.legendHelp}>
                <Info size={12} className={styles.helpIcon} /> Click on any available table to select it
              </div>
            </div>

            <div className={styles.featuresList}>
              {features.map((f, i) => (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <div className={styles.featureText}>{f.text}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <span className={styles.bottomLabel}>Need Help?</span>
            <span className={styles.bottomPhone}><Phone size={14} /> +91 98765 43210</span>
          </div>
          <div className={styles.bottomCenter}>
            <span className={styles.bottomTitle}>For Large Parties or Private Events</span>
            <span className={styles.bottomSub}>Our concierge team is here to assist you.</span>
          </div>
          <div className={styles.bottomRight}>
            <button className={styles.conciergeBtn}>
              <Headset size={16} /> CONTACT CONCIERGE
            </button>
          </div>
        </div>

      </div>

      {/* FLOATING MINI SUMMARY (Only visible if items selected and not confirmed) */}
      <AnimatePresence>
        {totalItems > 0 && !isConfirmed && (
          <motion.div 
            className={styles.floatingSummary}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            <div className={styles.floatingHeader}>
              <h4>Dining Preview</h4>
              <span className={styles.itemBadge}>{totalItems} Items</span>
            </div>
            
            <div className={styles.floatingList}>
              {selectedItems.map(item => (
                <div key={item.dish.id} className={styles.floatingRow}>
                  <span className={styles.floatingName}>{item.qty}x {item.dish.name}</span>
                  <span className={styles.floatingPrice}>₹{(item.dish.price * item.qty).toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>

            <div className={styles.floatingFooter}>
              <span>Est. Food Total</span>
              <span className={styles.floatingTotal}>₹{foodTotal.toLocaleString('en-IN')}</span>
            </div>

            <button className={styles.editSelectionBtn} onClick={() => { setIsMenuExpanded(true); window.scrollTo({ top: 300, behavior: 'smooth' }); }}>
              Edit Selection
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}


