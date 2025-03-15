import React from "react";
import styles from "./EditProfileForm.module.css";

export const PasswordSection = ({ formData, setFormData }) => {
  return (
    <section className={styles.passwordSection}>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className={styles.input}
          placeholder="Ingresa tu contraseña"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="confirmPassword" className={styles.label}>
          Confirmar contraseña
        </label>
        <input
          type="password"
          id="confirmPassword"
          className={styles.input}
          placeholder="Ingresa tu contraseña"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          required
        />
      </div>
    </section>
  );
};
