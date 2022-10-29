import React, { useEffect, useState } from 'react';
import styles from '../assets/Styles/components/Carousel.module.css';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = (props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0)
  }, [])

  const previousSlide = () => {
    if (index === 0) {
      setIndex(props.pictures.length -1)
    } else {
      setIndex(index -1)
    }
  }

  const nextSlide = () => {
    if (index === props.pictures.length -1) {
      setIndex(0)
    } else {
      setIndex(index +1)
    }
  }

  return (
    <section>
      <div className={styles.slides}>
        <img src={props.pictures[index]} alt="pictures" className={styles.pictures} />
          {props.pictures.length > 1 && 
        <div className="button">
          <button onClick={previousSlide}>
            <FontAwesomeIcon icon={ faChevronLeft } className={styles.icon_left} />
          </button>
          <button onClick={nextSlide}>
          <FontAwesomeIcon icon={ faChevronRight } className={styles.icon_right} />
          </button>
        </div>
        }
        <p className={styles.paging}>{index +1}/{props.pictures.length}</p>
      </div>
    </section>
  )
}

export default Carousel