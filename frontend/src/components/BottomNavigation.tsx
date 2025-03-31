import React from 'react';
import styles from './InputDesign.module.css';
import NavItem from './NavItem';
import { useNavigate } from 'react-router-dom';



const BottomNavigation = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.div26}>
      <div className={styles.div27}>
        <button onClick={() => navigate('/plans')}>Plans</button>
        <button onClick={() => navigate('/')}>Home</button>
        <button>Reports</button>
      </div>
    </nav>
  );
};

export default BottomNavigation;
