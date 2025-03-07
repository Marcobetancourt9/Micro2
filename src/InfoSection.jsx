import React from "react";
import styles from "./MainContainer.module.css";

const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoText}>
        <h2 className={styles.infoTitle}>
          ¿Cansado de la rutina universitaria?
        </h2>
        <p className={styles.infoDescription}>
          Escápate al corazón de Caracas y descubre la magia del
          <span className={styles.span2}> Parque Nacional Ávila</span>. ¡La
          Universidad Metropolitana te invita a vivir una aventura inolvidable!
          ⛰️
        </p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdd98f7d0deb21221fbf8454a9d20a375ffda625"
        alt="University campus"
        className={styles.infoImage}
      />
    </section>
  );
};

export default InfoSection;

