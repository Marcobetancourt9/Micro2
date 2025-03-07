"use client";
import React, { useState } from "react";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import SubmitButton from "./SubmitButton";

const RegistrationForm = () => {
  // Estados para cada input
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [idDocument, setIdDocument] = useState("");
  const [age, setAge] = useState("");
  const [registrationType, setRegistrationType] = useState("");
  const[loading, setLoading]=useState(false)


  const handleRegister = async (event) => {
    event.preventDefault();
  
    try {
      setLoading(true)
      const nombreRegistraado = await createuserwithemailandpassword(email, password)
      console.log(nombreRegistraado.user.email)
      setEmail("")
      setPassword("")
      setName("") 
      setLastName("")
      setGender("") 
      setConfirmPassword("")
      setPhone("")
      setIdDocument("")
      setAge("")
      setRegistrationType("")
      setLoading(false)
      navigation("login")
    } catch (error) {
      console.log(error)
    }

    
    console.log(nombreRegistraado.user.uid)
  };

  return (
    <main className="registration-form">
      <FormHeader />
      <section className="form-container">
        <form className="form-content" onSubmit={handleRegister}>
          <div className="input-row">
            {loading && <p>Registrando...</p>}
            <FormInput label="Nombre" placeholder="Ingresa tu nombre" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <FormInput label="Apellido" placeholder="Ingresa tu apellido" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div className="input-row">
            <FormInput label="Email" placeholder="krivas@correo.unimet.edu.ve" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormInput label="Género" placeholder="Hombre o Mujer" type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
          </div>

          <div className="input-row">
            <FormInput label="Contraseña" placeholder="Ingresa tu contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FormInput label="Confirmar contraseña" placeholder="Ingresa tu contraseña" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>

          <div className="input-row">
            <FormInput label="Teléfono" placeholder="Ingresa tu número de teléfono" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <FormInput label="Documento de identidad" placeholder="Ingresa tu cédula de identidad o carnet universitario" type="text" value={idDocument} onChange={(e) => setIdDocument(e.target.value)} />
          </div>

          <div className="input-row">
            <FormInput label="Edad" placeholder="Ingresa tu edad" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <FormInput label="¿Cómo deseas registrarte?" placeholder=">" type="text" value={registrationType} onChange={(e) => setRegistrationType(e.target.value)} />
          </div>

          <SubmitButton />
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
};

export default RegistrationForm;