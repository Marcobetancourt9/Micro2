import React from "react";
import "./UserCard.css";

const UserCard = ({ name, role }) => {
  return (
    <article className="user-card">
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-role">{role}</p>
      </div>

      <button className="view-button">Ver usuario</button>
    </article>
  );
};

export default UserCard;
