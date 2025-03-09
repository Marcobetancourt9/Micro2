import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fa9b7c45d310231548b9de688973df56e5629a0a6927ab49853f72e60c84e96?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Hero background"
        className={styles.heroBackground}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.mainTitle}>La mejor opción para ir</h1>
        <h2 className={styles.subTitle}>
          al<span className={styles.highlight}> Ávila</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
