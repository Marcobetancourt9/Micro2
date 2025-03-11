"use client";
import React from "react";
import styles from "./Tips.module.css";
import Footer from "../Footer";
import Header from "../Header";

// Componente para cada sección de consejos
const GuideSection = ({ number, title, description, imageSrc, imageAlt }) => {
  return (
    <div className={styles.guideSection}>
      <img src={imageSrc} alt={imageAlt} className={styles.image} />
      <h2>{number}. {title}</h2>
      <p>{description}</p>
    </div>
  );
};

// Datos de los consejos (ahora dentro del mismo archivo)
const tipsData = [
  {
    id: "safety",
    number: "1",
    title: "Seguridad en los senderos",
    description:
      "Ve por los caminos marcados, respeta la vida silvestre y evita caminar solo. Siempre informa a alguien de tus planes.",
    imageSrc: "/images/safety.png",
    imageAlt: "Seguridad en los senderos icono",
  },
  {
    id: "weather",
    number: "2",
    title: "Conciencia meteorológica",
    description:
      "Revisa el pronóstico, vístete adecuadamente y mantente hidratado. Evita explorar durante el clima adverso.",
    imageSrc: "/images/weather.png",
    imageAlt: "Clima icono",
  },
  {
    id: "health",
    number: "3",
    title: "Precauciones de salud",
    description:
      "Conozca sus límites, lleve bocadillos y agua, y use protector solar. Tenga a mano los números de emergencia locales.",
    imageSrc: "/images/health.png",
    imageAlt: "Salud icono",
  },
  {
    id: "gear",
    number: "4",
    title: "Elementos esenciales del equipo",
    description:
      "Empaca un botiquín de primeros auxilios, una linterna y otros equipos necesarios. Asegura de forma segura el equipo de cámara.",
    imageSrc: "/images/gear.png",
    imageAlt: "Equipo icono",
  },
  {
    id: "etiquette",
    number: "5",
    title: "Etiqueta del tour",
    description:
      "Sigue las instrucciones de los guías, conoce la ruta y usa cascos cuando sea necesario.",
    imageSrc: "/images/tour.png",
    imageAlt: "Tour icono",
  },
  {
    id: "navigation",
    number: "6",
    title: "Navegación y comunicación",
    description:
      "Lleva un mapa/brújula, ten un plan de emergencia y marca tu ruta si es necesario.",
    imageSrc: "/images/navigation.png",
    imageAlt: "Navegación icono",
  },
  {
    id: "wildlife",
    number: "7",
    title: "Conciencia de la vida silvestre",
    description:
      "Mantén una distancia segura de los animales y usa repelente de insectos.",
    imageSrc: "/images/wildlife.png",
    imageAlt: "Vida silvestre icono",
  },
];

// Componente principal
const Tips = () => {
  return (
    <main className={styles.tips}>
      <Header />
      <section className={styles.guideSections}>
        {tipsData.map((section) => (
          <GuideSection
            key={section.id}
            number={section.number}
            title={section.title}
            description={section.description}
            imageSrc={section.imageSrc}
            imageAlt={section.imageAlt}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default Tips;

