import React from "react";
import "./UserCard.css";
import { useNavigate } from "react-router-dom";


const UserCard = ({ name, role, uid }) => {
  const navigate = useNavigate();
  return (
    <article className="user-card">
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-role">{role}</p>
      </div>

      <button className="view-button" onClick={()=>navigate(`/userman/${uid}`)}>Ver usuario</button>
    </article>
  );
};

export default UserCard;
