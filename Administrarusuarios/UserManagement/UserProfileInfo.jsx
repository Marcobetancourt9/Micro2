"use client";
import React from "react";
import "./UserProfileInfo.css";

function UserProfileInfo() {
  return (
    <section className="info-column">
      <div className="info-container">
        <div className="field-group">
          <label className="field-label">Nombre</label>
          <input type="text" className="field-input" value="Eugenia" />

          <label className="field-label">Apellido</label>
          <input type="text" className="field-input" value="Salas" />

          <label className="field-label">Deuda</label>
          <input type="text" className="field-input" value="Ninguna" />

          <label className="field-label">Carrera</label>
        </div>
        <input type="text" className="field-input" value="Psicología" />

        <div className="phone-container">
          <label className="field-label">Teléfono</label>
          <input type="tel" className="field-input" value="0414 1447788" />
        </div>
      </div>
    </section>
  );
}

export default UserProfileInfo;