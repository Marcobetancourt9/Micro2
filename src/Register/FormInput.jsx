import React from "react";

const FormInput = ({ label, name, placeholder, type = "text", value, onChange }) => {
  return (
    <div className="input-group">
      <label className="input-label" htmlFor={name}>{label}</label>
      <input 
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field" 
      />

      <style jsx>{`
        .input-group {
          flex: 1;
          min-width: 300px;
        }

        .input-label {
          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          font-weight: 700;
          display: block;
          margin-bottom: 15px;
        }

        .input-field {
          width: 100%;
          border-radius: 30px;
          background-color: rgba(241, 234, 234, 1);
          border: 3px solid rgba(0, 0, 0, 1);
          padding: 20px 20px;
          font-size: 15px;
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
