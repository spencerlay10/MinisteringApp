import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InputDesign.module.css'; // Import the CSS module

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link to="/">Home</Link></li>
                <li className={styles.navItem}><Link to="/about">About</Link></li>
                <li className={styles.navItem}><Link to="/dashboard">Dashboard</Link></li>
                <li className={styles.navItem}><Link to="/profile">Profile</Link></li>
                <li className={styles.navItem}><Link to="/logout">Logout</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
