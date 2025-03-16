import React from "react";
import styles from "./MainContainer.module.css";
import { useNavigate } from "react-router";

const PlatformSection = () => {
  const navigate = useNavigate();
  const handleButtons = () => {
    navigate("/login")
  }
  return (
    <section className={styles.platformSection}>
      <h2 className={styles.platformTitle}>
        ¡Buscamos ser la plataforma líder en excursiones para
        <span className={styles.span3}> estudiantes</span>!
      </h2>
      <div className={styles.adventureSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3217ad7cbe2efc322d6a7c46ec9b5ce0f59bf9b"
          alt="Adventure background"
          className={styles.adventureBg}
        />
        <div className={styles.adventureContent}>
          <h3 className={styles.adventureTitle}>
            ¿Qué esperas para iniciar tu primera aventura?
            </h3>
          <div className={styles.buttonContainer}>
            <button
              className={styles.routesBtn}
              onClick={handleButtons} // Acción al hacer clic en "Ver rutas"
            >
              Ver rutas
            </button>
            <button
              className={styles.scheduleBtn}
              onClick={handleButtons} // Acción al hacer clic en "¡Agenda ya!"
            >
              ¡Agenda ya!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
