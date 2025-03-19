"use client";
import React from "react";
import "./UserProfileInfo.css";

function UserProfileInfo({user}) {
  return (
    <section className="info-column">
      <div className="info-container">
        <div className="field-group">
          <label className="field-label">Nombre</label>
          <input type="text"  disabled className="field-input" value={user && user.nombre} />

          <label className="field-label">Apellido</label>
          <input type="text" disabled className="field-input" value={user && user.apellido} />

          <label className="field-label">Deuda</label>
          <input type="text" disabled  className="field-input" value="Ninguna" />

          <label className="field-label">Tipo de Usuario</label>
        </div>
        <input type="text" disabled className="field-input" value={user && user.tipoRegistro} />

        <div className="phone-container">
          <label className="field-label">Teléfono</label>
          <input type="tel" disabled className="field-input" value={user && user.telefono} />
        </div>
      </div>
    </section>
  );
}

export default UserProfileInfo;