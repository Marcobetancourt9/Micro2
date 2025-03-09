import React from "react";
import styles from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.contentWrapper}>
        <article className={styles.leftColumn}>
          <h2 className={styles.title}>¿Sabías qué?</h2>
          <p className={styles.description}>
            A solo un paso de Caracas se encuentra el Parque Nacional El Ávila,
            un oasis natural perfecto para escapar de la rutina. Sus senderos
            para todos los niveles te invitan a disfrutar de la naturaleza.
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/44b429ddb9413069d84b5aa50924691fbc862ef34eda4049335e4331efef056b?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
            alt="Parque Nacional El Ávila"
            className={styles.parkImage}
          />
        </article>
        <article className={styles.rightColumn}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4c8088d2297baf7826d8fee214e4dfb1491dec6980a180b86a4e4f6ddec185e?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
            alt="El Ávila landscape"
            className={styles.landscapeImage}
          />
          <p className={styles.description}>
            El Ávila es mucho más que una montaña; es un símbolo de nuestra
            identidad y un lugar donde la naturaleza y la cultura se encuentran.
            Cada sendero es una invitación a explorar y a conectar con el alma
            de Venezuela.
          </p>
        </article>
      </div>
    </section>
  );
};

export default InfoSection;
