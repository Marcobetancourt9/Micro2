"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { app } from "../credentials";

const auth = getAuth(app);
const db = getFirestore(app);

export default function RegistrationForm() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    phone: "",
    idDocument: "",
    age: "",
    registrationType: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");

    // Validación de campos vacíos
    if (!formData.name || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Todos los campos son requeridos");
      return;
    }

    // Validación de email
    const email = formData.email.trim();
    if (!validateEmail(email)) {
      setError("El formato del correo es inválido");
      return;
    }

    // Validación de contraseñas
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      
      await setDoc(doc(db, "users", user.uid), {
        nombre: formData.name,
        apellido: formData.lastName,
        email: formData.email,
        genero: formData.gender,
        telefono: formData.phone,
        documento: formData.idDocument,
        edad: formData.age,
        tipoRegistro: formData.registrationType,
        uid: user.uid,
        fechaCreacion: new Date(),
      });
      
      setFormData({
        name: "",
        lastName: "",
        email: "",
        gender: "",
        password: "",
        confirmPassword: "",
        phone: "",
        idDocument: "",
        age: "",
        registrationType: "",
      });
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setError("Hubo un error al registrar el usuario. Inténtalo nuevamente.");
      setLoading(false);
    }
  };

  return (
    <main className="registration-form">
      <FormHeader />
      <section className="form-container">
        <form onSubmit={handleRegister} className="form-content">
          {loading && <p>Registrando...</p>}
          {error && <p className="text-red-500">{error}</p>}
          <FormInput label="Nombre" name="name" type="text" value={formData.name} onChange={handleChange} />
          <FormInput label="Apellido" name="lastName" type="text" value={formData.lastName} onChange={handleChange} />
          <FormInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          <FormInput label="Género" name="gender" type="text" value={formData.gender} onChange={handleChange} />
          <FormInput label="Contraseña" name="password" type="password" value={formData.password} onChange={handleChange} />
          <FormInput label="Confirmar contraseña" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
          <FormInput label="Teléfono" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
          <FormInput label="Documento de identidad" name="idDocument" type="text" value={formData.idDocument} onChange={handleChange} />
          <FormInput label="Edad" name="age" type="number" value={formData.age} onChange={handleChange} />
          <FormInput label="¿Cómo deseas registrarte?" name="registrationType" type="text" value={formData.registrationType} onChange={handleChange} />
          
          <button 
            style={{
              borderRadius: "25px",
              backgroundColor: "rgba(255, 103, 9, 1)",
              border: "1px solid rgba(0, 0, 0, 1)",
              minHeight: "100px",
              width: "499px",
              maxWidth: "100%",
              padding: "27px 10px",
              fontSize: "32px",
              color: "rgba(0, 0, 0, 1)",
              fontWeight: "700",
              textAlign: "center",
              cursor: "pointer",
              margin: "37px auto",
            }} 
            type="submit"
          >
            Registrar
          </button>

          <FormCheckbox />
        </form>
      </section>

      <style jsx>{`
        .registration-form {
          background-color: rgba(3, 29, 49, 1);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(0, 0, 0, 1);
          display: flex;
          padding: 79px 36px 191px;
          flex-direction: column;
          overflow: hidden;
          align-items: stretch;
          font-family: Istok Web, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .form-container {
          border-radius: 40px;
          background-color: rgba(11, 64, 105, 1);
          display: flex;
          padding: 77px 0;
          flex-direction: column;
          align-items: center;
        }

        .form-content {
          width: 100%;
          max-width: 1200px;
          padding: 0 23px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-row {
          display: flex;
          gap: 13px;
          width: 100%;
          flex-wrap: wrap;
        }

        @media (max-width: 991px) {
          .registration-form {
            padding: 20px 20px 100px;
          }

          .form-container {
            max-width: 100%;
          }

          .form-content {
            padding: 0 20px;
          }
        }
      `}</style>
    </main>
  );
}
