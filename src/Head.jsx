import React from 'react';
import styles from "./MainContainer.module.css";
import button1Image from "./assets/Ecomet icon.png"; // Asegúrate de que la imagen esté en la carpeta correcta
import button2Image from "./assets/icono inicio.png";

const Head = () => {
  return (
    <div className={styles.header}>
      <button className={styles.headerButton}><img 
        src={button1Image} 
        alt="Botón 1" 
        className={styles.headerButtonImage}
      /></button>
      <button className={styles.headerButton}><img
        src={button2Image} 
        alt="Botón 2" 
        className={styles.headerButtonImage}
      /></button>
    </div>
  );
}

export default Head;

