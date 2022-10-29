import NavLinks from './NavLinks';
import styles from '../../assets/Styles/components/Header.module.css';

const HeaderDesktop = () => {
    return (
        <nav className={styles.HeaderDesktop} >
        <NavLinks />
        </nav>
    )
}

export default HeaderDesktop

