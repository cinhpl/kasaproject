import logo from '../assets/Images/logo.svg';
import styles from '../assets/Styles/components/Header.module.css';    
import NavDesktop from '../components/Header/NavDesktop';
import NavResponsive from '../components/Header/NavResponsive';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.Header}>
            <Link to ='/'>
                <img src={logo} alt='Logo' className={styles.logo}/> 
            </Link>  
            <NavResponsive />
            <NavDesktop />
        </div>
    )
}

export default Header 