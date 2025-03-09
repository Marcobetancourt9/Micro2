"use client";
import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/efec7dabf4c0ba302a8d063e6669f161030b9b2ba63530b1cba4993de564ed73?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Main logo"
        className={styles.mainLogo}
        onClick={()=> navigate("/home")}
        style={{cursor:"pointer"}}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8372bb838ffb8ea1b890a87caf366876719b34488f296cf286e9547f4c590c34?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Menu icon"
        className={styles.menuIcon}
      />
    </header>
  );
};

export default Header;