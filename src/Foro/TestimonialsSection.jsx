"use client";
import React from "react";
import { ReviewCard } from "./ReviewCard";
import { ReviewInput } from "./ReviewInput";
import styles from "./TestimonialsSection.module.css";

const reviews = [
  {
    author: "Diego Fernández",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/08e634705db821ec837087db17823e0f78856ec330a7562b3f59422950bf32f9?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
    rating: 5,
    comment:
      '"Una excelente forma de explorar la naturaleza"¡Qué manera más fácil de descubrir rutas en el Ávila! Me encantó cómo la página de destinos detalla todo, desde la dificultad hasta los puntos de interés. Reservar fue pan comido y todo estuvo muy organizado.',
  },
  {
    author: "Ariadna Cagiao",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e1c0fd2925ea570a5a6d836a5d89df6ae84be0a773e2c155c1f84b97bc1ed118?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
    rating: 5,
    comment:
      '"Hermosas vistas y un proceso de reserva sencillo"Me encantó la experiencia de usar la app. Reservar fue muy sencillo, y el calendario de disponibilidad me ayudó a planificar con anticipación. La galería de fotos realmente muestra lo increíble del Ávila, y las vistas durante la caminata fueron aún mejores.',
  },
  {
    author: "Daniel Carrero",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ad2feee3bcc5fef352a606da1fe9f26e467a858bd21e0c1c05c367fefd3cdb82?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
    rating: 5,
    comment:
      '"Excelente experiencia en el Ávila"La aplicación es muy intuitiva y permite planificar excursiones fácilmente. Las rutas están bien descritas, incluyendo su dificultad y duración. La pasarela de pago con PayPal me dio mucha tranquilidad al momento de reservar.',
  },
  {
    author: "Sophia Lavie",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b5f92de06760d627601f12124136447d6f01b86132456d9978f8390267552b8b?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
    rating: 5,
    comment:
      '"Fácil de usar y con excursiones espectaculares"La plataforma está bien diseñada, y se nota que le han puesto atención a los detalles. Me gustó especialmente el buscador de excursiones, ya que me permitió encontrar rutas ideales para mi nivel.',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.headerImages}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/efec7dabf4c0ba302a8d063e6669f161030b9b2ba63530b1cba4993de564ed73?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt="Scenic view"
          className={styles.headerImage}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9e2581d491441fca1ad4ab7421246f4dbab83eda2afc6c23460e3e8076182e3?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt="Logo"
          className={styles.logoImage}
        />
      </div>
      <div className={styles.titleContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d86a986f075bc7dcb3b9b54b4f42b2834daffe14002dd6a4274d089d41b9de29?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt=""
          className={styles.titleBackground}
        />
        <h1 className={styles.title}>COMPARTE TU OPINIÓN</h1>
      </div>

      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}

      <ReviewInput />
    </section>
  );
};
