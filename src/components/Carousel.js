import { useEffect, useState } from 'react';

import styles from '../assets/Styles/components/Carousel.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";

// useState permet de suivre l'état du carousel et parcourir la galerie d'images
export default function Carousel(props) {
  const [slides, setSlides] = useState(0);

  useEffect(() => {
    setSlides(0)
  }, []) 

  const previousSlide = () => {
    if (slides === 0) {
      setSlides(props.pictures.length -1)
    } else {
      setSlides(slides -1)
    }
  }

  const nextSlide = () => {
    if (slides === props.pictures.length -1) {
      setSlides(0)
    } else {
      setSlides(slides +1)
    }
  }

  return (
    <section>
      <div className={styles.slides}>
        <img src={props.pictures[slides]} alt="pictures" className={styles.pictures} />
        <div className="button">
          <button onClick={previousSlide}>
            <FontAwesomeIcon icon={ faChevronLeft } className={styles.icon_left} />
          </button>
          <button onClick={nextSlide}>
          <FontAwesomeIcon icon={ faChevronRight } className={styles.icon_right} />
          </button>
        </div>      
        <p className={styles.paging}>{slides +1}/{props.pictures.length}</p>
      </div>
    </section>
  );
};