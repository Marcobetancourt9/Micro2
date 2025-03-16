import React from "react";
import Head from "../Head";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import PlatformSection from "./PlatformSection";
import ExploreSection from "./ExploreSection";
import Footer from "../Footer";
import styles from "./MainContainer.module.css";

const MainContainer = () => {
  return (
    <main className={styles.mainContainer}>
      <HeroSection />
      <InfoSection />
      <PlatformSection />
      <ExploreSection />
    </main>
  );
};

export default MainContainer;
