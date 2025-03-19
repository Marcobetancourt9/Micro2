"use client";
import React from "react";
import UserProfileInfo from "./UserProfileInfo";
import UserProfilePicture from "./UserProfilePhoto";
import ActionButtons from "./ActionsButtons";
import "./UserProfileCard.css";

function UserProfileCard() {
  return (
    <article className="profile-card">
      <h1 className="card-title">Administrar usuario</h1>
      <div className="card-content">
        <div className="content-container">
          <div className="profile-columns">
            <UserProfileInfo />
            <UserProfilePicture />
          </div>
        </div>
        <ActionButtons />
      </div>
    </article>
  );
}

export default UserProfileCard;