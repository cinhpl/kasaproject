import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../assets/Images/404.png';
import styles from '../assets/Styles/pages/Error.module.css';

class PageNotFound extends React.Component {
    render() {
        return <div className={styles.bloc}>
            <img src={ErrorImg} alt="Error 404" className={styles.img} />
            <p className={styles.text}>Oups! La page que vous demandez n'existe pas.</p>
            <Link to ="/" className={styles.link}>Retourner sur la page d'accueil</Link>
        </div>
    }
}

export default PageNotFound