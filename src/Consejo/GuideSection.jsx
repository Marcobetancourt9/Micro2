"use client";
import React from "react";
import styles from "./GuideSection.module.css";

const GuideSection = ({ number, title, description, imageSrc, imageAlt }) => {
  return (
    <article className={styles.guideSection}>
      <h2 className={styles.sectionTitle}>
        {number}. {title}
      </h2>
      <img src={imageSrc} alt={imageAlt} className={styles.sectionImage} />
      <p className={styles.sectionDescription}>{description}</p>
    </article>
  );
};

export default GuideSection;
