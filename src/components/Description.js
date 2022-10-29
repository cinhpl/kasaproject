import React from 'react';
import Dropdown from "./Dropdown";
import Host from "./Host";
import Rating from "./Rating";
import Tag from "./Tags";
import styles from '../assets/Styles/components/Description.module.css';

function Description({
  title,
  description,
  host,
  rating,
  location,
  equipments,
  tags
}) {
  return (
    <div className={styles.accommodation_details}>
      <section className={styles.host_details}>
        <div className="name_localisation">
          <h1 className={styles.accommodation_title}>{title}</h1>
          <p className={styles.location}>{location}</p>
          <Tag tags={tags} />
        </div>
      <div className={styles.host_rating}>
          <Host host={host} />
          <Rating rating={rating} />
      </div>
      </section>
      <section className={styles.host_elements}>
          <div className={styles.dropdown_description}>
              <Dropdown title="Description" content={description} />
            </div>
            <div className={styles.dropdown_description}>
              <Dropdown title="Equipements" content={equipments}  />
            </div>
        </section>
    </div>
  );
}

export default Description;

// utilisé props pour l