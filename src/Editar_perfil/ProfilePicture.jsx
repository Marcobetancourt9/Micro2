import React, { useState, useContext } from "react";
import styles from "./EditProfileForm.module.css";
import { uploadImage } from '../../supabaseCredentials.js';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { app } from '../../credentials';
import { getAuth } from 'firebase/auth';
import { UserContext } from '../Context/UserContext';

const db = getFirestore(app);
const auth = getAuth(app);

export const ProfilePicture = () => {
  const [isUploading, setIsUploading] = useState(false);
  const { profile, setProfile } = useContext(UserContext);
  const [imageSrc, setImageSrc] = useState(
    profile?.foto_perfil || "https://cdn.builder.io/api/v1/image/assets/TEMP/cf81e9eb4f779150f9c8b3aa1d54f125bba9b94d3106e925ce5c3bc3a7334b02?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
  );

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");

      const imageUrl = await uploadImage(file, 'foto-perfil', user.uid);
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, { foto_perfil: imageUrl });

      setProfile((prevProfile) => ({
        ...prevProfile,
        foto_perfil: imageUrl,
      }));
      setImageSrc(imageUrl);
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    } finally {
      setIsUploading(false);
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
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </label>
      {isUploading && <p className="mt-2 text-blue-600">Subiendo imagen...</p>}
    </section>
  );
};