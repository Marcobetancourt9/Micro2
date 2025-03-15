import React from "react";
import styles from "./EditProfileForm.module.css";

export const PhoneSection = ({ formData, setFormData }) => {
  return (
    <section className={styles.phoneSection}>
      <label htmlFor="phone" className={styles.label}>
        Teléfono
      </label>
      <input
        type="tel"
        id="phone"
        className={styles.input}
        placeholder="Ingresa tu numero de teléfono"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
    </section>
  );
};
