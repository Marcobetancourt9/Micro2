"use client";
import React from "react";
import "./ActionButtons.css";

function ActionButtons() {
  return (
    <div className="action-buttons">
      <button className="delete-button">Eliminar Usuario</button>
      <button className="restrict-button">Restringir Usuario</button>
      <button className="save-button">Guardar cambios</button>
    </div>
  );
}

export default ActionButtons;