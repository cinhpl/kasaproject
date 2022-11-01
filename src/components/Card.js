import { Link } from 'react-router-dom';
import Accommodations from '../accommodations.json';

import styles from '../assets/Styles/components/Card.module.css';

// Récupère la liste des logements dans le tableau des données
export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.cards}>
                    {Accommodations.map((accommodations) =>
                    <Link key={`Card-${accommodations.id}`} to={`/accommodations/${accommodations.id}`}>
                        <article className={styles.cardcontent}>
                            <img className={styles.img} src={accommodations.cover} alt={accommodations.title} />
                            <h3 className={styles.title}> {accommodations.title} </h3>
                        </article>
                    </Link>
                    )}
                </div>                
            </div>
        </div>
    );
};




