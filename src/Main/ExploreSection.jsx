import React from "react";
import RouteCard from "./RouteCard";
import styles from "./MainContainer.module.css";

const ExploreSection = () => {
  const routes = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/850afc54dc2492abdadf24096f6bff7f8f2193d0",
      title: "Quebrada Quintero",
      id: 0
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/08ae342f0a8bca85bac52f41855c1e66c594f91e",
      title: "Antiguo Teleferico",
      id: 2
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00e5de4f50688c6ae66928f90d8ebf9676c5e483",
      title: "Lagunazo",
      id: 1
    },
  ];

  return (
    <section className={styles.exploreSection}>
      <h2 className={styles.exploreTitle}>Explora tu Parque Nacional 📌</h2>
      <p className={styles.exploreSubtitle}>
        ¿Sabías que el Ávila, más que una montaña, es un tesoro natural y
        cultural?
      </p>
      <h3 className={styles.routesTitle}>RUTAS POPULARES 🔥</h3>
      <div className={styles.routeCards}>
        {routes.map((route, index) => (
          <RouteCard key={index} image={route.image} title={route.title} id={route.id} />
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
