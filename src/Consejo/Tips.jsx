"use client";
import React from "react";
import styles from "./Tips.module.css";
import GuideSection from "./GuideSection";

const Tips = () => {
  const sections = [
    {
      number: "1",
      title: "Seguridad en los senderos",
      description:
        "Ve por los caminos marcados, respeta la vida silvestre y evita caminar solo. Siempre informa a alguien de tus planes.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9508a4e20199cc66f7d5cfefbd3e5a3076ad1cdcab45daa25211b2cefdf8b1a7?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      imageAlt: "Seguridad en los senderos icono",
    },
    {
      number: "2",
      title: "Conciencia meteorológica",
      description:
        "Revisa el pronóstico, vístete adecuadamente y mantente hidratado. Evite explorar durante el clima adverso.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/800a177af6d9e30b9b1448d02db73e69cdb3a702c7a995250000d05ee9d26359?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      imageAlt: "Clima icono",
    },
    {
      number: "3",
      title: "Precauciones de salud",
      description:
        "Conozca sus límites, lleve bocadillos y agua, y use protector solar. Tenga a mano los números de emergencia locales.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4a28cdca33814200d0543ad53f8e1336c474ae445078cf420b700d0aeda6ad48?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      imageAlt: "Salud icono",
    },
    {
      number: "4",
      title: "Elementos esenciales del equipo",
      description:
        "Empaca un botiquín de primeros auxilios, una linterna y otros equipos necesarios. Asegure de forma segura el equipo de cámara.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b7c59eedba9c27d178c214fcc77ae921ed2d2901a62e2e31f040bcc140109b7f?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      imageAlt: "Equipo icono",
    },
    {
      number: "5",
      title: "Etiqueta del tour",
      description:
        "Siga las instrucciones de los guías, conozca la ruta y use cascos cuando sea necesario.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1498097a669dc5d471cc8edb3266fe0ed75237094da523e7039cff59cd708331?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      imageAlt: "Tour icono",
    },
    {
      number: "6",
      title: "Navegación y comunicación",
      description:
        "Lleve un mapa/brújula, tenga un plan de emergencia y marque su ruta si es necesario.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67e5c77462272bca6d42dbff7d82122ad14463a3068b3aaed721a94b3e491854?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      imageAlt: "Navegación icono",
    },
    {
      number: "7",
      title: "Conciencia de la vida silvestre",
      description:
        "Mantenga una distancia segura de los animales y use repelente de insectos.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/02e67e553c55144a58b157de8c13b2ef6da74d453a8537e8c88b7a37a937b381?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      imageAlt: "Vida silvestre icono",
    },
  ];

  return (
    <main className={styles.tips}>
      <div className={styles.headerImages}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/efec7dabf4c0ba302a8d063e6669f161030b9b2ba63530b1cba4993de564ed73?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt="Banner principal"
          className={styles.bannerImage}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9e2581d491441fca1ad4ab7421246f4dbab83eda2afc6c23460e3e8076182e3?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt="Logo"
          className={styles.logoImage}
        />
      </div>

      <section className={styles.guideSections}>
        {sections.map((section, index) => (
          <GuideSection
            key={index}
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
