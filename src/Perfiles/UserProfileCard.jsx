import React from "react";
import styles from "./UserProfileCard.module.css";

const UserProfileCard = ({ name, role, imageUrl }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.imageColumn}>
          <img
            src={imageUrl}
            alt={`Foto de perfil de ${name}`}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.infoColumn}>
          <h3 className={styles.userName}>{name}</h3>
          <p className={styles.userRole}>{role}</p>
        </div>
      </div>
      <button className={styles.viewButton}>Ver usuario</button>
    </article>
  );
};

export default React.memo(UserProfileCard);
