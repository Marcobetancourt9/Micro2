import React from "react";
import styles from "./LoginForm.module.css";

const RegisterButton = () => {
  return (
    <button
      type="button"
      className={styles.registerButton}
      onClick={() => {
        /* Handle Registration */
      }}
    >
      Regístrate
    </button>
  );
};

export default RegisterButton;
