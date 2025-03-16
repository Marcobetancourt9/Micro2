import React from "react";
import styles from "./Slide1698.module.css";

const LocationDetails = ({
  imageUrl,
  title,
  difficulty,
  duration,
  altitude,
}) => {
  return (
    <article className={styles.locationCard}>
      <img
        src={imageUrl}
        alt={`Vista de ${title}`}
        className={styles.locationImage}
      />
      <h2 className={styles.locationTitle}>{title}</h2>
      <div className={styles.locationInfo}>
        <p>Nivel de dificultad: {difficulty}</p>
        <p>{duration}</p>
        <p>{altitude} metros</p>
      </div>
    </article>
  );
};

export default LocationDetails;
