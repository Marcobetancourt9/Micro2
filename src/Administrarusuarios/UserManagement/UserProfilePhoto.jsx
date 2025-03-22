"use client";
import React from "react";
import "./UserProfilePhoto.css";

function UserProfilePicture({user}) {
  return (
    <section className="picture-column">
      <div className="picture-container">
        <img
          src={user.foto_perfil? user.foto_perfil : "https://cdn.builder.io/api/v1/image/assets/TEMP/cf81e9eb4f779150f9c8b3aa1d54f125bba9b94d3106e925ce5c3bc3a7334b02?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"}
          alt="Profile picture"
          className="profile-image"
        />
        <button className="edit-button">Editar foto de perfil</button>
      </div>
    </section>
  );
}

export default UserProfilePicture;