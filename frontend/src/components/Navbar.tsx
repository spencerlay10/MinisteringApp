import { Link, useLocation } from 'react-router-dom';
import styles from './InputDesign.module.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className={styles.navContainer}>
            <ul className={styles.navList}>
                <li className={`${styles.navItem} ${location.pathname === '/' ? styles.active : ''}`}>
                    <Link to="/">
                        <span className={styles.navLabel}>Home</span>
                    </Link>
                </li>
                <li className={`${styles.navItem} ${location.pathname === '/about' ? styles.active : ''}`}>
                    <Link to="/about">
                        <span className={styles.navLabel}>About</span>
                    </Link>
                </li>
                <li className={`${styles.navItem} ${location.pathname === '/dashboard' ? styles.active : ''}`}>
                    <Link to="/dashboard">
                        <span className={styles.navLabel}>Dashboard</span>
                    </Link>
                </li>
                <li className={`${styles.navItem} ${location.pathname === '/profile' ? styles.active : ''}`}>
                    <Link to="/profile">
                        <span className={styles.navLabel}>Profile</span>
                    </Link>
                </li>
                <li className={`${styles.navItem} ${location.pathname === '/logout' ? styles.active : ''}`}>
                    <Link to="/logout">
                        <span className={styles.navLabel}>Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;