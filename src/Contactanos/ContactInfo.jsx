import React from "react";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <section className={styles.infoSection}>
      <h2 className={styles.infoTitle}>Información</h2>
      <div className={styles.emailContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1d1e2f6b19d7ddee2bee6b99d9cb6f8322c6b37fde46ce87428d122051668ee?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt="Email Icon"
          className={styles.emailIcon}
        />
        <p className={styles.emailText}>E-Mail: Ecomet@correo.unimet.edu.ve</p>
      </div>
      <p className={styles.description}>
        En Ecomet estamos interesados en conocer su opinión. Envíenos sus
        sugerencias sobre el site, nuestras salas o cualquiera de nuestros
        servicios.
      </p>
    </section>
  );
};

export default ContactInfo;
