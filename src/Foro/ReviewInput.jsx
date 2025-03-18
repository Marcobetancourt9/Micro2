"use client";
import React from "react";
import { StarRating } from "./StarRating";
import styles from "./ReviewInput.module.css";

export const ReviewInput = () => {
  return (
    <section className={styles.inputContainer}>
      <div className={styles.ratingSection}>
        <StarRating />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/441f24781bd74aeb1b07cbbbea0a268ffd1573975d097b98b9fb574d4334dfce?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt="User avatar"
          className={styles.userAvatar}
        />
      </div>
      <textarea
        className={styles.reviewTextarea}
        placeholder="Escriba su mensaje..."
        aria-label="Write your review"
      />
      <button className={styles.submitButton} type="button">
        ENVIAR RESEÑA
      </button>
    </section>
  );
};
