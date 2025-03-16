"use client";
import React from "react";
import styles from "./Slide1698.module.css";
import LocationDetails from "./LocationDetails";
import Footer from "../Footer";

const Slide1698 = () => {
  return (
    <main className={styles.slide1698}>
      <section className={styles.heroSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1766841f900ce419b84265a79829844ed7d504af6488c7d18208877f95c16025?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt="Vista panorámica de la montaña"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <p className={styles.locationName}>Pico Oriental</p>
          <h1 className={styles.mainTitle}>Antiguo Teleferico</h1>
        </div>
      </section>

      <section className={styles.locationsGrid}>
        <LocationDetails
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/77e10c0f9693c87c14be115f07649111bb43fa5c48ed4576c7778eb6d456762a?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          title="QUEBRADA QUINTERO"
          difficulty="Medio"
          duration="1-1.5 horas"
          altitude="2300"
        />

        <LocationDetails
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/087b2772f87a29100c70044fbb5be89f71ecae8f23e92489a888d8270b0461bb?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          title="ANTIGUO TELEFERICO"
          difficulty="Fácil"
          duration="20-30 minutos"
          altitude="1070"
        />

        <LocationDetails
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5de9905b5f5b809afc65cd0496998e92f97770813f9b760bb4e9590147853c13?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          title="LAGUNAZO"
          difficulty="Difícil"
          duration="2-3 horas"
          altitude="3450"
        />
      </section>

      <hr className={styles.divider} />
    </main>
  );
};

export default Slide1698;
