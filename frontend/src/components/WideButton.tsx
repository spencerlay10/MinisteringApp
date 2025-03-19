import React from 'react';
import styles from './WideButton.module.css';

interface ButtonProps {
  button_text: string;
}

const Header: React.FC<ButtonProps> = ({ button_text }) => {
  return (
    <button className={styles.wideButton}>{button_text}</button>
  );
};

export default Header;
