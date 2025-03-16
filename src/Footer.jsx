import React from "react";
import styles from "./Main/MainContainer.module.css";
import { useLocation } from "react-router-dom";
const rutasSinHeaders = ["/paypal"] // Guardar aqui rutas donde no se quiere mostrar el footer

const Footer = () => {
  const location = useLocation();

  return (<>
    {!rutasSinHeaders.includes(location.pathname) &&<footer className={styles.footer}>
      <p className={styles.footerContent}>
        © Visita Caracas 2025 | Síguenos:{" "}
        
        <a href="https://www.instagram.com/tu_usuario/" className={styles.a}>
          Instagram
        </a>{" "}
        |{" "}
        <a href="https://www.facebook.com/" className={styles.a}>
          Facebook
        </a>
      </p>
    </footer>}
  </>
  );
};

export default Footer;
