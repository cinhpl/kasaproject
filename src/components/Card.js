import React from 'react';
import Accommodations from '../accommodations.json';
import styles from '../assets/Styles/components/Card.module.css';
import { Link } from 'react-router-dom';

class Card extends React.Component {
    render() {
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
        )
    }
}

export default Card

