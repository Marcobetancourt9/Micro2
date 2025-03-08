import React from "react";
import styles from "./MainContainer.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/168141f734adeb6e88fe6206340b814ade95513f"
        alt="Mountain background"
        className={styles.heroBg}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Excursiones al Ávila</h1>
        <h2 className={styles.heroSubtitle}>
          para <span className={styles.span}>UNIMETANOS</span>
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
