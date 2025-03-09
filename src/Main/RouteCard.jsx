import React from "react";
import styles from "./MainContainer.module.css";
import { useNavigate } from 'react-router-dom';

const RouteCard = ({ image, title, id }) => {
  const navigate = useNavigate();
  
  return (
    <article className={styles.routeCard} onClick={()=> navigate(`/destino/${id}`)}>
      <img src={image} alt={title} className={styles.img} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardLink}>
        Haz click<span className={styles.span4}> para mas información</span>
      </p>
    </article>
  );
};

export default RouteCard;

