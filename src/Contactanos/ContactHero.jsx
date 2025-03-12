import React from "react";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  return (
    <section className={styles.hero}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d86a986f075bc7dcb3b9b54b4f42b2834daffe14002dd6a4274d089d41b9de29?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Contact Hero Background"
        className={styles.heroBackground}
      />
      <h1 className={styles.heroTitle}>CONTÁCTANOS</h1>
    </section>
  );
};

export default ContactHero;
