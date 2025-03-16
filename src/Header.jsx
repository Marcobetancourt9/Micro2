"use client";
import React from "react";
import styles from "./Header.module.css";
import Menu from "./HomeUsuario/Menu";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const rutasSinHeaders = ["/paypal", "/perfiles"] // Guardar aqui rutas donde no se quiere mostrar el header

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (<>
      {!rutasSinHeaders.includes(location.pathname) && <header className={styles.header}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/efec7dabf4c0ba302a8d063e6669f161030b9b2ba63530b1cba4993de564ed73?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt="Main logo"
          className={styles.mainLogo}
          onClick={()=> navigate("/home")}
          style={{cursor:"pointer"}}
        />
        <Menu className={styles.missionVision}/>
      </header>}
    </>
  )
};

export default Header;