import React from "react";
import styles from "./EditProfileForm.module.css";

export const ProfilePicture = () => {
  const handleImageUpload = () => {
    // Handle image upload functionality
  };

  return (
    <section className={styles.profilePictureSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf81e9eb4f779150f9c8b3aa1d54f125bba9b94d3106e925ce5c3bc3a7334b02?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Profile picture"
        className={styles.profileImage}
      />
      <button
        onClick={handleImageUpload}
        className={styles.editPhotoButton}
        type="button"
      >
        Editar foto de perfil
      </button>
    </section>
  );
};
