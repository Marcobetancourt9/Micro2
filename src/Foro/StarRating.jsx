"use client";
import React from "react";
import styles from "./StarRating.module.css";

export const StarRating = ({ rating = 5 }) => {
  return (
    <div
      className={styles.ratingContainer}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[...Array(rating)].map((_, index) => (
        <img
          key={index}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/77eef19e6b6aa7e7f0f8a506bc0e724a60847ce8687724461b6fa26c61b27717?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
          alt=""
          className={styles.starIcon}
        />
      ))}
    </div>
  );
};
