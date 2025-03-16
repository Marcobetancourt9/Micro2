import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Main/MainContainer.module.css";
import button1Image from "/public/Ecomet icon.png";
import button2Image from "/public/icono inicio.png";
import { useLocation } from "react-router-dom";

const rutasPosibbles = ["/login", "/register", "/"]

const Head = () => {
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
      if (!rutasPosibbles.includes(location.pathname)) navigate("/login")
    }, []);
  
  return (<>
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
    </>
  );
}

export default Head;

