'use client';
import React from 'react';
import styles from './InputDesign.module.css';

interface NavItemProps {
  icon: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
  return (
    <div className={styles.navItem}>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <span className={styles.navLabel}>{label}</span>
    </div>
  );
};

export default NavItem;
