"use client";
import React, { useState } from "react";
import styles from "./Forum.module.css";

const StarRating = ({ rating, onRatingChange, interactive = false }) => {
  const handleStarClick = (selectedRating) => {
    if (interactive && onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  return (
    <div
      className={styles.starRating}
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          type={interactive ? "button" : "presentation"}
          onClick={() => handleStarClick(index + 1)}
          className={styles.starButton}
          aria-label={interactive ? `Rate ${index + 1} stars` : undefined}
        >
          <img
            src={
              index < rating
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/f0d9df4cb65779c39e09658f017fe66f643d3c54?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/ae760cbe2c7c9bc299b31f0b6ce06e3643937d97?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
            }
            alt=""
            className={styles.starIcon}
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  );
};

const ReviewCard = ({ author, image, rating, comment }) => {
  return (
    <article className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <img
          src={image}
          alt={`${author}'s profile`}
          className={styles.authorImage}
        />
        <h2 className={styles.authorName}>{author}</h2>
      </div>
      <StarRating rating={rating} />
      <p className={styles.reviewComment}>{comment}</p>
    </article>
  );
};

const ReviewInput = ({ onSubmitReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    if (!comment.trim()) {
      alert("Please write a review");
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmitReview({
        rating,
        comment,
        date: new Date().toISOString(),
      });

      // Reset form
      setRating(0);
      setComment("");
      alert("Review submitted successfully!");
    } catch (error) {
      alert("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.reviewInput} onSubmit={handleSubmit}>
      <div className={styles.ratingInput}>
        <StarRating
          rating={rating}
          onRatingChange={setRating}
          interactive={true}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/207a84b99b87e80953c63aa2e0087f83a5735364?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt="User avatar"
          className={styles.userAvatar}
        />
      </div>
      <textarea
        className={styles.reviewTextarea}
        placeholder="Escriba su mensaje..."
        aria-label="Write your review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? "ENVIANDO..." : "ENVIAR RESEÑA"}
      </button>
    </form>
  );
};

const Forum = () => {
  const [reviews, setReviews] = useState([
    {
      author: "Diego Fernández",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ce8a1e837e099e5f3ff8fc71c1614dbad61c3e37?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      rating: 5,
      comment:
        "Una excelente forma de explorar la naturaleza. ¡Qué manera más fácil de descubrir rutas en el Ávila! Me encantó cómo la página de destinos detalla todo, desde la dificultad hasta los puntos de interés. Reservar fue pan comido y todo estuvo muy organizado.",
    },
    {
      author: "Ariadna Cagiao",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6f250be457c4528d2dca4ddeaef542b59fccf811?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      rating: 5,
      comment:
        "Hermosas vistas y un proceso de reserva sencillo. Me encantó la experiencia de usar la app. Reservar fue muy sencillo, y el calendario de disponibilidad me ayudó a planificar con anticipación. La galería de fotos realmente muestra lo increíble del Ávila, y las vistas durante la caminata fueron aún mejores.",
    },
    {
      author: "Daniel Carrero",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5b85d06ba925fc41b20b42d27aceab97629c57ac?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      rating: 5,
      comment:
        "Excelente experiencia en el Ávila. La aplicación es muy intuitiva y permite planificar excursiones fácilmente. Las rutas están bien descritas, incluyendo su dificultad y duración. La pasarela de pago con PayPal me dio mucha tranquilidad al momento de reservar.",
    },
    {
      author: "Sophia Lavie",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9af2f5ff1336ed04d09b77d2911b17901f975aba?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      rating: 5,
      comment:
        "Fácil de usar y con excursiones espectaculares. La plataforma está bien diseñada, y se nota que le han puesto atención a los detalles. Me gustó especialmente el buscador de excursiones, ya que me permitió encontrar rutas ideales para mi nivel.",
    },
  ]);

  const handleSubmitReview = async (newReview) => {
    // In a real application, you would send this to an API
    // For now, we'll just add it to the reviews array
    const reviewWithAuthor = {
      author: "Anonymous User",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/207a84b99b87e80953c63aa2e0087f83a5735364?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
      rating: newReview.rating,
      comment: newReview.comment,
    };

    setReviews((prevReviews) => [...prevReviews, reviewWithAuthor]);
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.reviewsContainer}>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            author={review.author}
            image={review.image}
            rating={review.rating}
            comment={review.comment}
          />
        ))}
      </div>
      <ReviewInput onSubmitReview={handleSubmitReview} />
    </section>
  );
};

export default Forum;
