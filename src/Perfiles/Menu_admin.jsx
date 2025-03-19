import { useState, useEffect, useRef } from "react";
import menuIcon from "/public/menu-icon.png"; // Verifica la ruta del icono
import styles from "../HomeUsuario/Menu.module.css"; // Importa los estilos
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../../credentials";

export default function Menu_admin() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const usuario = auth.currentUser;
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(null); // Estado para mostrar mensaje
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

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    auth.authStateReady().then(() => {
      if (!auth.currentUser) {
        navigate("/");
      }
    });
  }

  function cerrarSesion() {
    signOut(auth);
    navigate("/");
  }

  function gestionrrutas() {
    navigate("/gestionarrutas");//agregar
  }
  function finanzas() {
    navigate("/finanzas");//agregar
  }

  function perfiles() {
    navigate("/adminuser");
  }

  function volveralinicio() {
    navigate("/home");
  }

  function reservas() {
    navigate("/gestionarreservas");//Agregar
  }

  function editarperfil() {
    navigate("/editarp");
  }

  return (
    <div style={{ zIndex: 99 }}>
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
        <span className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          &times;
        </span>
        <ul>
          <li>
            <p> Bienvenido {usuario && usuario.email}</p>
          </li>
          <li>
            <a onClick={() => volveralinicio()}>🌲 Inicio</a>
          </li>
          <li>
            <a onClick={() => reservas()}>📅 Gestionar Reservas</a>
          </li>
          <li>
            <a onClick={() => gestionrrutas()}>🖼️ Gestionar Rutas</a>
          </li>
          <li>
            <a onClick={() => perfiles()}>👤 Administrar Usuarios</a>
          </li>
          <li>
            <a onClick={() => editarperfil()}>🪪 Editar Perfil</a>
          </li>
          <li>
            <a onClick={() => finanzas()}>💵 Gestionar Finanzas</a>
          </li>
          <li>
            <a onClick={() => cerrarSesion()}>❌ Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
