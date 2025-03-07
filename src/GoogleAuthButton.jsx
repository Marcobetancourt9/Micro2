import React from "react";
import styles from "./LoginForm.module.css";

const GoogleAuthButton = () => {
  return (
    <button
      type="button"
      className={styles.googleButton}
      onClick={() => {
        /* Handle Google Auth */
      }}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/29461731216392c6e7178075a5dba3ac5dfa4fd3b3cefb4a8df876d1eb7f7601?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Google Icon"
        className={styles.googleIcon}
      />
      <span className={styles.googleButtonText}>Continuar con Google</span>
    </button>
  );
};

export default GoogleAuthButton;
