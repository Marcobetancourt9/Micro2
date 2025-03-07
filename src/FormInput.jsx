import React from "react";

const FormInput = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input type={type} placeholder={placeholder} className="input-field" />

      <style jsx>{`
        .input-group {
          flex: 1;
          min-width: 300px;
        }

        .input-label {
          color: rgba(255, 255, 255, 1);
          font-size: 40px;
          font-weight: 700;
          display: block;
          margin-bottom: 15px;
        }

        .input-field {
          width: 100%;
          border-radius: 30px;
          background-color: rgba(241, 234, 234, 1);
          border: 3px solid rgba(0, 0, 0, 1);
          padding: 32px 38px;
          font-size: 20px;
          color: #000000;
          font-weight: 400;
        }

        @media (max-width: 991px) {
          .input-field {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default FormInput;
