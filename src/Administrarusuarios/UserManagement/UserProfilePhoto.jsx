"use client";
import React from "react";
import "./UserProfilePhoto.css";

function UserProfilePicture() {
  return (
    <section className="picture-column">
      <div className="picture-container">
        <img
          src="https://media.discordapp.net/attachments/1289764054168113175/1352026396435943434/Portrait_Placeholder.png?ex=67dc8434&is=67db32b4&hm=f60fc698990d7c1cde606a9fff180519d3ef2f762afadfb1d9da6939342f6f3a&=&format=webp&quality=lossless"
          alt="Profile picture"
          className="profile-image"
        />
        <button className="edit-button">Editar foto de perfil</button>
      </div>
    </section>
  );
}

export default UserProfilePicture;