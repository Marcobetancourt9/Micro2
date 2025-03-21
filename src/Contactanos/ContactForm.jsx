"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { collection, addDoc } from "firebase/firestore"; // Importar Firestore
import { db } from "../../credentials"; // Asegúrate de que la ruta sea correcta

const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Guardar el comentario en Firestore
      await addDoc(collection(db, "comments"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        date: new Date().toISOString(), // Agregar la fecha del envío
      });

      // Mostrar mensaje de éxito
      setShowMessage("¡Tu mensaje ha sido enviado exitosamente!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setShowMessage("Hubo un error al enviar tu mensaje. Intenta nuevamente.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className={styles.formSection}>
      <h2 className={styles.formTitle}>Contáctanos</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Nombres y Apellidos</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombres y Apellidos"
            className={styles.input}
            aria-label="Nombres y Apellidos"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="krivas@correo.unimet.edu.ve"
            className={styles.input}
            aria-label="Email"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ingresa tu número de teléfono"
            className={styles.input}
            aria-label="Teléfono"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Reseña</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escriba su mensaje..."
            className={styles.messageInput}
            aria-label="Mensaje"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          ENVIAR MENSAJE
        </button>
      </form>

      {showMessage && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>{showMessage}</p>
            <button onClick={() => setShowMessage(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;