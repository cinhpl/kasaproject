import Star from "../assets/Images/starfull.png";
import StarEmpty from "../assets/Images/starempty.png";

import styles from '../assets/Styles/components/Rating.module.css';

export default function Rate({ rating }) {
  const range = [1, 2, 3, 4, 5];
  
  return (
    <div className={styles.rating}>
      {range.map((rateStep) =>
        rating >= rateStep ? (
          <img key={rateStep} src={Star} alt="star" className={styles.stars} />
        ) : (
          <img key={rateStep} src={StarEmpty} alt="star-empty" className={styles.stars} />
        )
      )}
    </div>
  );
};

