import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Data from '../accommodations.json';

// Importe les composants permettant d'afficher les datas 
import Carousel from "../components/Carousel";
import Description from "../components/Description";

import styles from "../assets/Styles/pages/Accommodations.module.css";

// Permet d'afficher les éléments d'un longement en fonction de son ID
export default function Location() {
  const { id } = useParams();
  const activeLocation = Data.find((item) => item.id === id);

// Si l'ID d'un logement est erronée renvoi à la page d'erreur
  if (!activeLocation) 
  return <Navigate to='/Error'/>;

  return (
    <div className={styles.location}>
      {[activeLocation].map(
        ({
          id, title, pictures, description, host, rating, location, equipments, tags
        }) => (
          <div key={`description-${id}`} className={styles.accommodations}>
            <Carousel 
              pictures={pictures}  
            />
            <Description
              id={id}
              title={title}
              description={description}
              host={host}
              rating={rating}
              location={location}
              equipments={equipments}
              tags={tags} 
            />
          </div>
        )
      )}
    </div>
  );
}


