import React from "react";
import styles from "./LoginForm.module.css";

const AuthHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d728afb440bc96104b5d45de50809e465b4c258dfd1b3a2d597873200cbb295?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Authentication Logo"
        className={styles.mainLogo}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/89eae8f2fd3ed7e0eb643f727bbbf0bdea771df7ba20833f9a66a801ab15788f?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Brand Logo"
        className={styles.brandLogo}
      />
    </header>
  );
};

export default AuthHeader;
