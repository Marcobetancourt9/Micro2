import { useState, useEffect, useRef } from "react"; 
import menuIcon from "/src/assets/menu-icon.png"; // Verifica la ruta del icono
import styles from "./Menu.module.css"; // Importa los estilos
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../../credentials";

export default function Menu() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const usuario = auth.currentUser
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

  useEffect(() => {
    checkUser()
  }, []);

  async function checkUser(){
    auth.authStateReady().then(()=>{
      console.log(auth.currentUser)
      if(!auth.currentUser){
        navigate("/")
      }
    })
  }

  function cerrarSesion(){
    signOut(auth);
    navigate("/")
  }

  return (
    <div style={{zIndex: 99}}>
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
            <p> Bienvenido {usuario && usuario.email}</p>
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
            <a onClick={()=> cerrarSesion() }>❌ Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
