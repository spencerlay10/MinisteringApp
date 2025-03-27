import React from 'react';
import styles from './Header.module.css';

interface NavItemProps {
  icon: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
  return (
    <div className={styles.div28}>
      <i className={icon} />
      <div className={styles.div29}>{label}</div>
    </div>
  );
};

export default NavItem;
// need to update this for links on homepage