import NavLinks from './NavLinks';
import styles from '../../assets/Styles/components/Header.module.css';

export default function HeaderDesktop() {
    return (
        <nav className={styles.HeaderDesktop} >
            <NavLinks />
        </nav>
    );
};



