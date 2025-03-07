"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.css";

const PasswordInput = () => {
  const [password, setPassword] = useState("");

  return (
    <div className={styles.inputGroup}>
      <label htmlFor="password" className={styles.inputLabel}>
        Contraseña
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ingresa tu contraseña"
        className={styles.inputField}
        aria-label="Password input"
      />
    </div>
  );
};

export default PasswordInput;
