import React from "react";

const DropdownSelect = ({ label, name, value, onChange }) => {
  return (
    <div className="dropdown-group">
      <label className="dropdown-label" htmlFor={name}>{label}</label>
      <select 
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="dropdown-field"
      >
        <option value="">Seleccione una opción</option>
        <option value="guia">Guía</option>
        <option value="visitante">Visitante</option>
      </select>

      <style jsx>{`
        .dropdown-group {
          flex: 1;
          min-width: 300px;
        }

        .dropdown-label {
          color: white;
          font-size: 20px;
          font-weight: 700;
          display: block;
          margin-bottom: 15px;
        }

        .dropdown-field {
          width: 100%;
          border-radius: 30px;
          background-color: rgba(241, 234, 234, 1);
          border: 3px solid black;
          padding: 15px 20px;
          font-size: 16px;
          font-weight: 400;
          color: black;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .dropdown-field {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default DropdownSelect;
