import React from 'react';
import styles from './InputDesign.module.css';

interface NavItemProps {
  icon: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
  return (
    <div className={styles.div28}>
      <i className={icon} />
      <button className={styles.div29}>{label}</button>
    </div>
  );
};

export default NavItem;
