"use client";
import React from "react";
import styles from "./Header.module.css";
import stylesVisitante from "./Main/MainContainer.module.css";
import Menu from "./HomeUsuario/Menu";
import Menu_admin from "./Perfiles/Menu_admin";
import Menu_guia from "./Agregar/Menu_guia";
import button1Image from "/public/Ecomet icon.png";
import button2Image from "/public/icono inicio.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { app, db } from "../credentials";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { useState, useEffect } from "react";
const rutasVisitante = ["/login", "/register", "/"]
const rutasEstudiante = ["/home", "/destino/0", "/destino/1", "/destino/2", "/consejos", "/contactanos", "/editarp", "/calendario", "/paypal", "/excursion", "/foro"]
const rutasSinHeaders = ["/paypal"] // Guardar aqui rutas donde no se quiere mostrar el header

const auth = getAuth(app);

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState("")
  const [userInfo, setUserInfo] = useState()

  async function checkUser() {
    auth.authStateReady().then(() => {
      setUser(auth.currentUser)
      return auth.currentUser
    }).then((usuario) => {
      if (usuario) return getDoc(doc(db, "users", usuario.uid));
      else if (!rutasVisitante.includes(location.pathname)) navigate("/login")
    }).then((info) => {
      if (info) {
        setUserInfo(info.data())
        if (info.data().tipoRegistro != null && !["Administrador", "guia"].includes(info.data().tipoRegistro) && !rutasEstudiante.includes(location.pathname)) navigate("/home")
      }
    }
    )
  }


  useEffect(() => {
    checkUser();
  }, [location]);

  // MENU DE VISITANTE
  if (rutasSinHeaders.includes(location.pathname)) {
    return
  }

  else if (!user) {
    return (<>
      <div className={stylesVisitante.header}>
        <button className={stylesVisitante.headerButton} onClick={() => navigate('/')}><img
          src={button1Image}
          alt="Botón 1"
          className={stylesVisitante.headerButtonImage}
        /></button>
        <button className={stylesVisitante.headerButton} onClick={() => navigate('/login')}><img
          src={button2Image}
          alt="Botón 2"
          className={stylesVisitante.headerButtonImageTwo}
        /></button>
      </div>
    </>
    );
  }
  // MENU DE USUARIO
  else if (userInfo && userInfo.tipoRegistro != null && !["Administrador"].includes(userInfo.tipoRegistro)) {
    return (
      <header className={styles.header}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/efec7dabf4c0ba302a8d063e6669f161030b9b2ba63530b1cba4993de564ed73?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt="Main logo"
          className={styles.mainLogo}
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        />
        {["guia"].includes(userInfo.tipoRegistro)? <Menu_guia className={styles.missionVision} />:<Menu className={styles.missionVision} /> }
      </header>
    )
  }
  // MENU DE ADMIN
  else if (userInfo && userInfo.tipoRegistro == "Administrador") {
    return (
      <header className={styles.header}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/efec7dabf4c0ba302a8d063e6669f161030b9b2ba63530b1cba4993de564ed73?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt="Main logo"
          className={styles.mainLogo}
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        />
        <Menu_admin className={styles.missionVision} />
      </header>
    );
  }
};

export default Header;