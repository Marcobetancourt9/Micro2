"use client";
import React from "react";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import SubmitButton from "./SubmitButton";

const RegistrationForm = () => {
  return (
    <main className="registration-form">
      <FormHeader />
      <section className="form-container">
        <form className="form-content">
          <div className="input-row">
            <FormInput
              label="Nombre"
              placeholder="Ingresa tu nombre"
              type="text"
            />
            <FormInput
              label="Apellido"
              placeholder="Ingresa tu apellido"
              type="text"
            />
          </div>

          <div className="input-row">
            <FormInput
              label="Email"
              placeholder="krivas@correo.unimet.edu.ve"
              type="email"
            />
            <FormInput
              label="Género"
              placeholder="Hombre o Mujer"
              type="text"
            />
          </div>

          <div className="input-row">
            <FormInput
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              type="password"
            />
            <FormInput
              label="Confirmar contraseña"
              placeholder="Ingresa tu contraseña"
              type="password"
            />
          </div>

          <div className="input-row">
            <FormInput
              label="Teléfono"
              placeholder="Ingresa tu numero de teléfono"
              type="tel"
            />
            <FormInput
              label="Documento de identidad"
              placeholder="Ingresa tu cédula de identidad o carnet universitario"
              type="text"
            />
          </div>

          <div className="input-row">
            <FormInput
              label="Edad"
              placeholder="Ingresa tu numero de teléfono"
              type="number"
            />
            <FormInput
              label="¿Cómo deseas registrarte?"
              placeholder=">"
              type="text"
            />
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
