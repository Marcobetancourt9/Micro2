"use client";
import React from "react";
import Header from "../Header";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import MissionVision from "./MissionVision";
import Footer from "../Footer";
import styles from "./HomeUsuario.module.css";

const HomeUsuario = () => {
  return (
    <main className={styles.homeusuario}>
      <Header className={styles.center}/>
      <Hero />
      <InfoSection className={styles.infoSection} />
      <MissionVision className={styles.missionVision}/>
      <Footer />
    </main>
  );
};

export default HomeUsuario;


