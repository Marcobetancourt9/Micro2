import React from "react";

const FormHeader = () => {
  return (
    <header className="form-header">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d728afb440bc96104b5d45de50809e465b4c258dfd1b3a2d597873200cbb295?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Registration form logo"
        className="header-logo"
      />
      <div className="header-content">
        <h1 className="title">Crea una cuenta</h1>
        <p className="subtitle">Es rápido y fácil.</p>
      </div>

      <style jsx>{`
        .form-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 38px;
        }

        .header-logo {
          aspect-ratio: 1.71;
          object-fit: contain;
          object-position: center;
          width: 410px;
          border-radius: 50%;
          align-self: center;
          z-index: 10;
          max-width: 100%;
        }

        .header-content {
          text-align: center;
          margin-top: 5px;
        }

        .title {
          color: rgba(255, 255, 255, 1);
          font-size: 48px;
          font-weight: 700;
          margin: 0;
        }

        .subtitle {
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          font-weight: 400;
          margin: 5px 0 0;
        }

        @media (max-width: 991px) {
          .title {
            font-size: 40px;
          }
        }
      `}</style>
    </header>
  );
};

export default FormHeader;
