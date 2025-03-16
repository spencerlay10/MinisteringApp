import React from 'react';
import styles from './Header.module.css';
import IconSVG from './IconSVG';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <button className={styles.menuButton} aria-label="Menu">
        <IconSVG
          id="menu-icon"
          svg={`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="menu" style="width: 30px; height: 30px"> <path d="M3.75 15H26.25M3.75 7.5H26.25M3.75 22.5H26.25" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`}
        />
      </button>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default Header;
