"use client";
import * as React from "react";
import { useState } from "react";
import styles from "./PaypalLoginForm.module.css";

const PaypalLoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepLoggedIn: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className={styles.paypalContainer}>
      <section className={styles.formSection}>
        <header className={styles.paymentHeader}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5337c2e761da58e32576f029bfb16a6b09c930f02b0aa4acaf420432439168ef?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
            alt="PayPal Logo"
            className={styles.paypalLogo}
          />
          <h1 className={styles.headerTitle}>Pagar con Paypal</h1>
        </header>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Correo electronico o número de celular"
              aria-label="Email or phone number"
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Contraseña"
              aria-label="Password"
            />
          </div>

          <div className={styles.checkboxContainer}>
            <div className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                id="keepLoggedIn"
                name="keepLoggedIn"
                checked={formData.keepLoggedIn}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              <div className={styles.checkboxContent}>
                <label htmlFor="keepLoggedIn" className={styles.checkboxLabel}>
                  Mantener abierta la sesión para pagar con más rapidez.
                </label>
                <p className={styles.checkboxHelp}>
                  No se recomienda en dispositivos compartidos.
                </p>
              </div>
            </div>
          </div>

          <button type="submit" className={styles.loginButton}>
            Iniciar sesión
          </button>

          <a href="#" className={styles.forgotPassword}>
            ¿Tienes problemas para iniciar sesión?
          </a>
        </form>

        <div className={styles.divider}>
          <span className={styles.dividerLine}></span>
          <span className={styles.dividerText}>O</span>
          <span className={styles.dividerLine}></span>
        </div>

        <div className={styles.alternativePayment}>
          <button type="button" className={styles.cardPaymentButton}>
            Pagar con tarjeta
          </button>

          <div className={styles.cancelContainer}>
            <span className={styles.cancelText}>Cancelar y volver a </span>
            <span className={styles.brandText}>ECOMET</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaypalLoginForm;
