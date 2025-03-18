"use client";
import React from "react";
import { StarRating } from "./StarRating";
import styles from "./ReviewCard.module.css";

export const ReviewCard = ({ author, avatar, rating, comment }) => {
  return (
    <article className={styles.reviewContainer}>
      <header className={styles.reviewHeader}>
        <div className={styles.authorInfo}>
          <img src={avatar} alt={author} className={styles.authorAvatar} />
          <h3 className={styles.authorName}>{author}</h3>
        </div>
        <StarRating rating={rating} />
      </header>
      <p className={styles.reviewText}>{comment}</p>
    </article>
  );
};
