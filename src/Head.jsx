import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Main/MainContainer.module.css";
import button1Image from "/public/Ecomet icon.png";
import button2Image from "/public/icono inicio.png";
import { useLocation } from "react-router-dom";
const rutasSinHeaders = ["/paypal"] // Guardar aqui rutas donde no se quiere mostrar el header

const Head = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (<>
      {!rutasSinHeaders.includes(location.pathname) && <div className={styles.header}>
        <button className={styles.headerButton} onClick={() => navigate('/')}><img 
          src={button1Image} 
          alt="Botón 1" 
          className={styles.headerButtonImage}
        /></button>
        <button className={styles.headerButton} onClick={()=> navigate('/login') }><img
          src={button2Image} 
          alt="Botón 2" 
          className={styles.headerButtonImageTwo}
        /></button>
      </div>}
    </>
  );
}

export default Head;

