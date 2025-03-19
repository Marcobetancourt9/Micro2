"use client";
import React from "react";
import "./UserProfilePhoto.css";

function UserProfilePicture() {
  return (
    <section className="picture-column">
      <div className="picture-container">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5540e964b11e1e1ca02428964b3bd01f29f63ab1?placeholderIfAbsent=true"
          alt="Profile picture"
          className="profile-image"
        />
        <button className="edit-button">Editar foto de perfil</button>
      </div>
    </section>
  );
}

export default UserProfilePicture;