import React from "react";
import styles from "./Main/MainContainer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerContent}>
        © Visita Caracas 2025 | Síguenos:{" "}
        
        <a href="https://www.instagram.com/tu_usuario/" className={styles.a}>
          Instagram
        </a>{" "}
        |{" "}
        <a href="https://www.facebook.com/" className={styles.a}>
          Facebook
        </a>
      </p>
    </footer>
  );
};

export default Footer;
