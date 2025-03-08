"use client";
import React from "react";
import styles from "./LoginForm.module.css";

const EmailInput = ({ value, onChange }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor="email" className={styles.inputLabel}>
        Email
      </label>
      <input 
        type="email"
        id="email"
        value={value}
        onChange={onChange}
        placeholder="example@correo.unimet.edu.ve"
        className={styles.inputField}
        aria-label="Email input"
      />
    </div>
  );
};

export default EmailInput;

