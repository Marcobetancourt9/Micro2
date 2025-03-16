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