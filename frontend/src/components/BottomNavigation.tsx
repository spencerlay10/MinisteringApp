import React from 'react';
import styles from './Header.module.css';
import NavItem from './NavItem';

const BottomNavigation = () => {
  return (
    <nav className={styles.div26}>
      <div className={styles.div27}>
        <NavItem icon={styles.tiTiCalendarI4} label="Plans" />
        <NavItem icon={styles.tiTiHomeI5} label="Home" />
        <NavItem icon={styles.tiTiFileTextI6} label="Reports" />
      </div>
    </nav>
  );
};

export default BottomNavigation;
