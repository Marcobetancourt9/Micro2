import React from "react";

const FormCheckbox = () => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" className="checkbox-input" id="terms" />
      <label htmlFor="terms" className="checkbox-label">
        Al continuar confirmo que he leído y acepto los{" "}
        <span className="highlight terms">Términos y condiciones</span> y{" "}
        <span className="highlight privacy">Política de privacidad</span>
      </label>

      <style jsx>{`
        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 27px;
          margin-top: 20px;
          padding: 0 25px;
        }

        .checkbox-input {
          width: 62px;
          height: 68px;
          border-radius: 4px;
          border: 1px solid #d1d5db;
          background-color: #fff;
        }

        .checkbox-label {
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          font-weight: 400;
          line-height: 1;
          flex: 1;
        }

        .highlight {
          font-weight: 500;
          font-style: italic;
        }

        .terms {
          color: rgba(196, 122, 230, 1);
        }

        .privacy {
          color: rgba(216, 132, 255, 1);
        }

        @media (max-width: 991px) {
          .checkbox-container {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};

export default FormCheckbox;
