"use client";
import React from "react";
import styles from "./LoginForm.module.css";
import AuthHeader from "./AuthHeader";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import GoogleAuthButton from "./GoogleAuthButton";
import RegisterButton from "./RegisterButton";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className={styles.loginContainer}>
      <AuthHeader />
      <section className={styles.formContainer}>
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <EmailInput />
          <PasswordInput />
          <button type="submit" className={styles.loginButton}>
            Iniciar Sesión
          </button>
          <GoogleAuthButton />
          <RegisterButton />
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
