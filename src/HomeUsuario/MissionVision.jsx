import React from "react";
import styles from "./MissionVision.module.css";

const MissionVision = () => {
  return (
    <section className={styles.missionVisionSection}>
      <div className={styles.contentWrapper}>
        <article className={styles.missionColumn}>
          <h2 className={styles.title}>MISIÓN</h2>
          <p className={styles.description}>
            Conectar a estudiantes universitarios con la naturaleza a través de actividades organizadas en el Ávila, promoviendo el bienestar y la conciencia ambiental.
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aa30b07622273e42e15b9ab74f4048bc37bb6aa4aaf1d8de9a8812f3e346ce4"
            alt="Misión"
            className={styles.missionImage}
          />
        </article>
        <article className={styles.visionColumn}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/536bd51c13452b1f121c49a893ddb0ebece3151b7b4c485a8f5ec2bd47901c14"
            alt="Visión"
            className={styles.visionImage}
          />
          <h2 className={styles.title}>VISIÓN</h2>
          <p className={styles.description}>
            Ser la plataforma líder en actividades al aire libre para estudiantes en Caracas, fomentando el turismo sostenible y la conservación del Ávila.
          </p>
        </article>
      </div>
    </section>
  );
};

export default MissionVision;
