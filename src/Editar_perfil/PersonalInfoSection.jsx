import React from "react";
import styles from "./EditProfileForm.module.css";

export const PersonalInfoSection = ({ formData, setFormData }) => {
  return (
    <section className={styles.personalInfo}>
      <div className={styles.inputGroup}>
        <label htmlFor="firstName" className={styles.label}>
          Nombre
        </label>
        <input
          type="text"
          id="firstName"
          className={styles.input}
          placeholder="Ingresa tu nombre"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="lastName" className={styles.label}>
          Apellido
        </label>
        <input
          type="text"
          id="lastName"
          className={styles.input}
          placeholder="Ingresa tu apellido"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          required
        />
      </div>
    </section>
  );
};
