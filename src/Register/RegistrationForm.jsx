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
    padding: 5%;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    font-family: Istok Web, -apple-system, Roboto, Helvetica, sans-serif;
  }

  .form-container {
    border-radius: 40px;
    background-color: rgba(11, 64, 105, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 600px; /* Límite en pantallas grandes */
    margin: auto;
    width: 95%;
    max-width: 700px; /* Aumentamos el tamaño */
    min-height: 750px; /* Aumentamos la altura */
    padding: 30px; /* Más espacio interno */
  }


  .form-content {
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  input {
    width: 100%; /* Ocupa todo el ancho del contenedor */
    padding: 10px 40px 10px 12px; /* Espacio adicional para el icono */
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    box-sizing: border-box;
    position: relative;
  }

  .input-wrapper {
    position: relative;
    width: 100%;
  }

  .input-icon {
    position: absolute;
    left: 10px; /* Ajusta para alineación correcta */
    top: 50%; /* Centra verticalmente */
    transform: translateY(-50%);
    font-size: 18px; /* Tamaño adaptable */
    color: #777;
  }

  button {
    border-radius: 22px;
    background-color: rgba(255, 103, 9, 1);
    border: 1px solid rgba(0, 0, 0, 1);
    min-height: 50px;
    width: 100%;
    max-width: 300px;
    padding: 10px;
    font-size: clamp(14px, 3vw, 20px);
    color: rgba(0, 0, 0, 1);
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    margin: 10px auto;
  }

  @media (max-width: 768px) {
    .form-container {
      padding: 15px;
      min-height: auto;
    }

    input {
      font-size: 14px;
      padding: 10px 36px 10px 12px; /* Ajusta el padding para iconos */
    }

    .input-icon {
      font-size: 16px;
    }
  }
    @media (max-width: 768px) {
  .form-container {
    padding: 10px;
    width: 95%;
    max-width: 100%;
  }

  .form-content {
    gap: 10px;
  }

  input {
    font-size: 14px;
    padding: 8px;
    width: 100%;
  }

  .input-wrapper {
    width: 100%;
  }

  .input-icon {
    font-size: 14px;
    left: 8px;
  }

  button {
    min-height: 50px;
    font-size: 16px;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 5px;
    width: 100%;
    border-radius: 20px;
  }

  .header-content h1 {
    font-size: 20px;
  }

  .header-content p {
    font-size: 14px;
  }

  input {
    font-size: 12px;
    padding: 6px;
  }

  button {
    font-size: 14px;
    min-height: 40px;
  }
}

`}</style>


    </main>
  );
}