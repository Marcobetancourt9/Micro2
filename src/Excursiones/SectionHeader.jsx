import React from "react";
import styles from "./SectionHeader.module.css";

const SectionHeader = ({ backgroundImage, title }) => {
  return (
    <header className={styles.sectionHeader}>
      <img
        src={backgroundImage}
        alt=""
        className={styles.backgroundImage}
        aria-hidden="true"
      />
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default SectionHeader;
