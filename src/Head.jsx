import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./MainContainer.module.css";
import button1Image from "./assets/Ecomet icon.png"; // Asegúrate de que la imagen esté en la carpeta correcta
import button2Image from "./assets/icono inicio.png";

const Head = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
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
    </div>
  );
}

export default Head;

