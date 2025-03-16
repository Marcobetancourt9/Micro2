"use client";
import React from "react";
import styles from "./Tips.module.css";

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

// Datos de los consejos
const tipsData = [
  { id: "safety", number: "1", title: "Seguridad en los senderos", description: "Ve por los caminos marcados, respeta la vida silvestre y evita caminar solo. Siempre informa a alguien de tus planes.", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9508a4e20199cc66f7d5cfefbd3e5a3076ad1cdcab45daa25211b2cefdf8b1a7?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e", imageAlt: "Seguridad en los senderos icono" },
  { id: "weather", number: "2", title: "Conciencia meteorológica", description: "Revisa el pronóstico, vístete adecuadamente y mantente hidratado. Evita explorar durante el clima adverso.", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/800a177af6d9e30b9b1448d02db73e69cdb3a702c7a995250000d05ee9d26359?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e", imageAlt: "Clima icono" },
  { id: "health", number: "3", title: "Precauciones de salud", description: "Conozca sus límites, lleve bocadillos y agua, y use protector solar. Tenga a mano los números de emergencia locales.", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a28cdca33814200d0543ad53f8e1336c474ae445078cf420b700d0aeda6ad48?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e", imageAlt: "Salud icono" },
  { id: "gear", number: "4", title: "Elementos esenciales del equipo", description: "Empaca un botiquín de primeros auxilios, una linterna y otros equipos necesarios. Asegura de forma segura el equipo de cámara.", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7c59eedba9c27d178c214fcc77ae921ed2d2901a62e2e31f040bcc140109b7f?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e", imageAlt: "Equipo icono" },
  { id: "etiquette", number: "5", title: "Etiqueta del tour", description: "Sigue las instrucciones de los guías, conoce la ruta y usa cascos cuando sea necesario.", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1498097a669dc5d471cc8edb3266fe0ed75237094da523e7039cff59cd708331?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e", imageAlt: "Tour icono" },
  { id: "navigation", number: "6", title: "Navegación y comunicación", description: "Lleva un mapa/brújula, ten un plan de emergencia y marca tu ruta si es necesario.", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/67e5c77462272bca6d42dbff7d82122ad14463a3068b3aaed721a94b3e491854?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e", imageAlt: "Navegación icono" },
  { id: "wildlife", number: "7", title: "Conciencia de la vida silvestre", description: "Mantén una distancia segura de los animales y usa repelente de insectos.", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/02e67e553c55144a58b157de8c13b2ef6da74d453a8537e8c88b7a37a937b381?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e", imageAlt: "Vida silvestre icono" },
];

// Componente principal
const Tips = () => {
  return (
    <main className={styles.tips}>
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
    </main>
  );
};

export default Tips;

