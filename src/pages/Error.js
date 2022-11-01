import { Link } from 'react-router-dom';
import ErrorImg from '../assets/Images/404.png';
import styles from '../assets/Styles/pages/Error.module.css';

// Permet le renvoi à la page "404" 
export default function PageNotFound() {
    return <div className={styles.bloc}>
                <img src={ErrorImg} alt="Error 404" className={styles.img} />
                <p className={styles.text}>Oups! La page que vous demandez n'existe pas.</p>
                <Link to ="/" className={styles.link}>Retourner sur la page d'accueil</Link>
            </div>
};

