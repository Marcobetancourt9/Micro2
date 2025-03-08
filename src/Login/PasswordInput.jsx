"use client";
import React from "react";
import styles from "./LoginForm.module.css";

const PasswordInput = ({ value, onChange }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor="password" className={styles.inputLabel}>
        Contraseña
      </label>
      <input
        type="password"
        id="password"
        value={value}  // Se pasa el estado del padre
        onChange={onChange}  // Se pasa la función del padre
        placeholder="Ingresa tu contraseña"
        className={styles.inputField}
        aria-label="Password input"
      />
    </div>
  );
};

export default PasswordInput;

