"use client";
import React from "react";
import styles from "./ExcursionsSection.module.css";
import ExcursionCard from "./ExcursionCard";
import SectionHeader from "./SectionHeader";
import ExcursionsFooter from "./ExcursionsFooter";

const ExcursionsSection = () => {
  const excursions = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/681b9785f4883545e4605f8ee9e73b96dce7d0dc?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      title: "Quebrada Quintero",
      participants: 15,
      startDate: "20/03/2025",
      startTime: "8:00 AM",
      endDate: "20/03/2025",
      endTime: "12:00 PM",
      status: "Programada",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0e5ad6ca7b7c13820cb0c8f5e541fc890672c65b?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      title: "Antiguo Teleferico",
      participants: 10,
      startDate: "18/03/2025",
      startTime: "9:00 AM",
      endDate: "18/03/2025",
      endTime: "1:00 PM",
      status: "Programada",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/18c2c98f25a3a55da9fa5bb53beae8e9d6b30018?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      title: "Lagunazo",
      participants: 20,
      startDate: "21/03/2025",
      startTime: "10:00 AM",
      endDate: "21/03/2025",
      endTime: "2:00 PM",
      status: "Programada",
    },
  ];

  return (
    <section className={styles.excursionsSection}>
      <SectionHeader
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/f546ff125e6d0a4d4119e819bd294c2abfac0f0e?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        title="MIS EXCURSIONES"
      />

      <main className={styles.excursionsContainer}>
        {excursions.map((excursion) => (
          <ExcursionCard key={excursion.id} {...excursion} />
        ))}
      </main>
    </section>
  );
};

export default ExcursionsSection;
