"use client";
import React, { useState } from "react";
import styles from "./EditProfileForm.module.css";
import { ProfilePicture } from "./ProfilePicture";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { PasswordSection } from "./PasswordSection";
import { PhoneSection } from "./PhoneSection";
import { ActionButton } from "./ActionButton";

const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className={styles.profileContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d728afb440bc96104b5d45de50809e465b4c258dfd1b3a2d597873200cbb295?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Profile header decoration"
        className={styles.headerImage}
      />
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit}
        aria-label="Edit profile form"
      >
        <div className={styles.formContent}>
          <div className={styles.formLayout}>
            <div className={styles.mainColumn}>
              <header className={styles.header}>
                <h1 className={styles.title}>Editar Perfil</h1>
              </header>
              <PersonalInfoSection
                formData={formData}
                setFormData={setFormData}
              />
              <PasswordSection formData={formData} setFormData={setFormData} />
            </div>
            <div className={styles.sideColumn}>
              <ProfilePicture />
            </div>
          </div>
        </div>
        <PhoneSection formData={formData} setFormData={setFormData} />
        <ActionButton />
      </form>
    </main>
  );
};
export default EditProfileForm;