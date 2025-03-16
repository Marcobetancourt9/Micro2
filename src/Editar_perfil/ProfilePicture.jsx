import React, { useState } from "react";
import styles from "./EditProfileForm.module.css";

const ParentComponent = () => {
  const guardarCambios = () => {
    // Aquí va tu lógica para guardar los datos
    console.log("Datos guardados exitosamente");
  };

  return <ActionButton guardarCambios={guardarCambios} />;
};

export const ProfilePicture = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://cdn.builder.io/api/v1/image/assets/TEMP/cf81e9eb4f779150f9c8b3aa1d54f125bba9b94d3106e925ce5c3bc3a7334b02?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className={styles.profilePictureSection}>
      <img src={imageSrc} alt="Profile" className={styles.profileImage} />
      <label className={styles.editPhotoButton}>
        Editar foto de perfil
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </label>
    </section>
  );
};
