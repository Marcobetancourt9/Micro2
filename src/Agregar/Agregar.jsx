"use client";
import React from "react";
import styles from "./Agregar.module.css";

const MainImage = () => {
  return (
    <section className={styles.mainImageContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1766841f900ce419b84265a79829844ed7d504af6488c7d18208877f95c16025?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Imagen principal"
        className={styles.mainImage}
      />
    </section>
  );
};

const LocationCard = ({ backgroundImage, title }) => {
  return (
    <article className={styles.locationCard}>
      <img
        src={backgroundImage}
        alt={`Fondo de ${title}`}
        className={styles.locationBackground}
      />
      <h2 className={styles.locationTitle}>{title}</h2>
    </article>
  );
};

const ActionButtons = () => {
  return (
    <div className={styles.actionButtonsContainer}>
      <button className={styles.deleteButton}>Eliminar ruta existente</button>
      <button className={styles.createButton}>Crear nueva ruta</button>
    </div>
  );
};

function Agregar() {
  return (
    <main className={styles.slide1698}>
      <MainImage />

      <section className={styles.locationsSection}>
        <LocationCard
          backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/58926609537fd9ac0798395a6fcee90c776e5fe12bbe363c288caafa7b4356eb?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          title="QUEBRADA QUINTERO"
        />
        <LocationCard
          backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/74f3314d662502c154fbf947b73f9ed00b340f2d2b5b01a2d939523de6ee5f67?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          title="ANTIGUO TELEFERICO"
        />
        <LocationCard
          backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/d030e53bb51acf345950aba78e0804a2c5568d14b22d9daaf8e89d2228dc7894?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          title="LAGUNAZO"
        />
        <ActionButtons />
      </section>
    </main>
  );
}

export default Agregar;
