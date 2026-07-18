import { motion } from 'framer-motion';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from './AdminLoginPage.module.css';
import { useState } from 'react';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login for now
    alert('Admin Dashboard coming soon.');
    navigate('/');
  };

  return (
    <div className={styles.page}>
      <Navbar />
      
      <div className={styles.content}>
        <div className={styles.ambientGlow}></div>
        
        <motion.div 
          className={styles.loginCard}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className={styles.iconWrapper}>
            <Lock size={28} />
          </div>
          
          <h1 className={styles.title}>Restricted Access</h1>
          <p className={styles.subtitle}>Savora Concierge & Admin</p>
          
          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Admin ID</label>
              <input 
                type="text" 
                className={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your ID"
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label className={styles.label}>Passcode</label>
              <input 
                type="password" 
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            
            <motion.button 
              type="submit" 
              className={styles.submitBtn}
              whileTap={{ scale: 0.98 }}
            >
              Authenticate
            </motion.button>
          </form>

          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
