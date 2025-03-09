import { useState, useEffect, useRef, useContext } from "react"; // Agrega useContext
import { UserContext } from "../Context/UserContext"; // Asegúrate de importar correctamente
import menuIcon from "/src/assets/menu-icon.png"; // Verifica la ruta del icono
import styles from "./Menu.module.css"; // Importa los estilos

export default function Menu() {
  
  const { user, setUser,profile } = useContext(UserContext); // Usa useContext para acceder al contexto
  
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Referencia para el menú desplegable

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div>
      <img
        src={menuIcon}
        alt="Menú"
        className={`cursor-pointer ${styles.menuIcon}`}
        onClick={(e) => {
          e.stopPropagation(); // Evita que el evento cierre el menú inmediatamente
          setIsOpen(!isOpen);
        }}
      />
      <div
        ref={menuRef}
        className={`${styles.menuDesplegable} ${isOpen ? styles.open : ""}`}
      >
        <span
          className={styles.closeBtn}
          onClick={() => setIsOpen(false)}
        >
          &times;
        </span>
        <ul>
          <li>
            <p> Bienvenido {profile.nombre}</p>
          </li>
          <li>
            <a href="#">🌲 Inicio</a>
          </li>
          <li>
            <a href="#">🗓️ Reservar</a>
          </li>
          <li>
            <a href="#">🖼️ Rutas</a>
          </li>
          <li>
            <a href="#">🦺 Consejos de Seguridad</a>
          </li>
          <li>
            <a href="#">🪪 Editar Perfil</a>
          </li>
          <li>
            <a href="#">📫 Contactarnos</a>
          </li>
          <li>
            <a href="/">❌ Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
