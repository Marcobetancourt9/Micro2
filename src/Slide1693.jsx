"use client";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import MissionVision from "./MissionVision";
import Footer from "./Footer";
import styles from "./Slide1693.module.css";

const Slide1693 = () => {
  return (
    <main className={styles.slide1693}>
      <Header className={styles.center}/>
      <Hero />
      <InfoSection className={styles.infoSection} />
      <MissionVision className={styles.missionVision}/>
      <Footer />
    </main>
  );
};

export default Slide1693;


