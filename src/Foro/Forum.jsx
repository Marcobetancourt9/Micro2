"use client";
import React, { useState, useEffect } from "react";
import styles from "./Forum.module.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importar Firebase Auth
import { db } from "../../credentials"; // Asegúrate de que la ruta sea correcta

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
  const [reviews, setReviews] = useState([]);
  const [userName, setUserName] = useState("Anonymous User"); // Estado para el nombre del usuario

  // Obtener el usuario autenticado
  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUserName(currentUser.displayName || currentUser.email); // Usa el nombre o el correo del usuario
    }
  }, []);

  // Cargar reseñas desde Firestore
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "reviews"));
        const reviewsData = querySnapshot.docs.map((doc) => doc.data());
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmitReview = async (newReview) => {
    try {
      const reviewWithAuthor = {
        author: userName, // Usa el nombre del usuario autenticado
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/207a84b99b87e80953c63aa2e0087f83a5735364?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString(),
      };

      // Guardar la reseña en Firestore
      await addDoc(collection(db, "reviews"), reviewWithAuthor);

      // Actualizar el estado local
      setReviews((prevReviews) => [...prevReviews, reviewWithAuthor]);
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    }
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