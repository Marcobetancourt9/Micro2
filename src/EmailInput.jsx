"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.css";

const EmailInput = () => {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.inputGroup}>
      <label htmlFor="email" className={styles.inputLabel}>
        Email
      </label>
      <input 
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@correo.unimet.edu.ve"
        className={styles.inputField}
        aria-label="Email input"
      />
    </div>
  );
};

export default EmailInput;
