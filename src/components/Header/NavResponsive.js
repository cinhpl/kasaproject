import NavLinks from './NavLinks';
import styles from '../../assets/Styles/components/Header.module.css';
import { CgMenuRound } from 'react-icons/cg';
import { CgCloseO } from 'react-icons/cg';
import { useState } from 'react';

const HeaderMobile = () => {

    const [open, setOpen] = useState(false);

    const openIcon = <CgMenuRound className={styles.Icon} 
        onClick={() => setOpen(!open)}
    />

    const closeIcon = <CgCloseO className={styles.Icon} 
        onClick={() => setOpen(!open)}
    />

    const closeNav = () => setOpen(false);

    return (
        <nav className={styles.HeaderMobile}>
        { open ? closeIcon : openIcon}
        {open && <NavLinks isResponsive={true} closeNav={closeNav} />}
        </nav>
    )
}

export default HeaderMobile