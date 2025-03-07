import React from "react";
import styles from "./MainContainer.module.css";

const RouteCard = ({ image, title }) => {
  return (
    <article className={styles.routeCard}>
      <img src={image} alt={title} className={styles.img} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardLink}>
        Haz click<span className={styles.span4}> para mas información</span>
      </p>
    </article>
  );
};

export default RouteCard;

