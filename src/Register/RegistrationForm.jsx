"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import DropdownSelect from "./DropdownSelect";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { app } from "../../credentials";

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
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");

    if (!formData.name || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Todos los campos son requeridos");
      return;
    }

    const email = formData.email.trim();
    if (!validateEmail(email)) {
      setError("El formato del correo es inválido");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      setLoading(true);
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
      console.log("Usuario registrado exitosamente");
      setLoading(false);
      console.log("Usuario registrado exitosamente");
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError("Hubo un error al registrar el usuario. Inténtalo nuevamente.");
      setLoading(false);
    }
  };

  return (
    <main className="registration-form">
      <FormHeader />
      <section className="form-container">
      <div className="header-content">
        <h1 className="title">Crea una cuenta</h1>
        <p className="subtitle">Es rápido y fácil.</p>
      </div>
        <form onSubmit={handleRegister} className="form-content">
          <FormInput label="Nombre" name="name" type="text" value={formData.name} onChange={handleChange} />
          <FormInput label="Apellido" name="lastName" type="text" value={formData.lastName} onChange={handleChange} />
          <FormInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          <FormInput label="Género" name="gender" type="text" value={formData.gender} onChange={handleChange} />
          <FormInput label="Contraseña" name="password" type="password" value={formData.password} onChange={handleChange} />
          <FormInput label="Confirmar contraseña" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
          <FormInput label="Teléfono" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
          <FormInput label="Documento de identidad" name="idDocument" type="text" value={formData.idDocument} onChange={handleChange} />
          <FormInput label="Edad" name="age" type="number" value={formData.age} onChange={handleChange} />
          <DropdownSelect label="¿Cómo deseas registrarte?" name="registrationType" value={formData.registrationType} onChange={handleChange} />          

          {loading && <p>Registrando...</p>}
          {error && <p style={{color:"rgb(255, 0, 0)"}} className="text-red-500">* {error} *</p>}
          <FormCheckbox />
          <button 
            style={{
              borderRadius: "22px",
              backgroundColor: "rgba(255, 103, 9, 1)",
              border: "1px solid rgba(0, 0, 0, 1)",
              minHeight: "75px",
              width: "300px",
              maxWidth: "100%",
              padding: "10px",
              fontSize: "28px",
              color: "rgba(0, 0, 0, 1)",
              fontWeight: "700",
              textAlign: "center",
              cursor: "pointer",
              margin: "10px auto",
            }} 
            type="submit"
          >
            Registrarse
          </button>

          
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
          padding: 50px 0;
          flex-direction: column;
          align-items: center;
          width: 80%;
          margin: auto;
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