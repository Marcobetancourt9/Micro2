import React from "react";
import styles from "./ExcursionCard.module.css";

const ExcursionCard = ({
  image,
  title,
  participants,
  startDate,
  startTime,
  endDate,
  endTime,
  status,
}) => {
  return (
    <article className={styles.excursionCard}>
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.excursionImage} />
          <h3 className={styles.excursionTitle}>{title}</h3>
          <button className={styles.infoButton}>
            <em>Haz click</em> <span>para mas información</span>
          </button>
        </div>
        <div className={styles.excursionDetails}>
          <p className={styles.detailText}>
            Personas inscritas: {participants}
            <br />
            <br />
            Fecha - Hora de salida: {startDate} - {startTime}
            <br />
            <br />
            Fecha - Hora de llegada: {endDate} - {endTime}
            <br />
            <br />
            Estado de la Excursión: {status}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ExcursionCard;
