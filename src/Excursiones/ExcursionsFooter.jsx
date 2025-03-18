import React from "react";
import styles from "./ExcursionsFooter.module.css";

const ExcursionsFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>© Visita Caracas 2025 | Síguenos: |</p>
        <a href="#" className={styles.socialLink}>
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default ExcursionsFooter;
