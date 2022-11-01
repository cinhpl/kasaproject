import logo from "../assets/Images/logofooter.png";
import styles from "../assets/Styles/components/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="logo" className={styles.logo} />
            <p className={styles.text}>© {(new Date().getFullYear())} Kasa. All rights reserved</p>
        </footer>
    );
};