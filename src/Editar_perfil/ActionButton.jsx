import React from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook de navegación
import styles from "./EditProfileForm.module.css"; // Estilos CSS

// Componente ActionButton con funcionalidad añadida
export const ActionButton = ({ guardarCambios }) => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  // Función para guardar cambios y cambiar de vista
  const guardarYCambiarVista = () => {
    if (guardarCambios) {
      guardarCambios(); // Llamamos a la función de guardar datos
    }
    navigate("/home"); // Navegamos a la página principal
  };

  return (
    <button
      type="button" // Cambiado a button para evitar comportamientos por defecto de type="submit"
      className={styles.submitButton}
      onClick={guardarYCambiarVista} // Evento onClick para manejar la acción
    >
      Continuar
    </button>
  );
};
