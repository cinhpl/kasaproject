import React, { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './../assets/Styles/components/Dropdown.module.css'

const Dropdown = ({ title, content, id }) => {
  const [isActive, setIsActive] = useState(false);
  const showContent = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <div>
      <button className={styles.button} onClick={showContent}>
        <h3 className={styles.title}>{title}
          <span>{isActive ? <FontAwesomeIcon icon={faChevronUp}  /> 
          : <FontAwesomeIcon icon={faChevronDown} />}
          </span>
        </h3>
      </button>

      {isActive && Array.isArray(content) && (
        <ul className={styles.content}>
          {content.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      )}

      {isActive && typeof content === "string" && (
        <p key={id} className={styles.content}>
          {content}
        </p>
      )}
    </div>
  );
};

export default Dropdown;