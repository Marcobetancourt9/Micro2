import React from "react";
import "./UserCard.css";
import { useNavigate } from "react-router-dom";


const UserCard = ({ user }) => {
  const navigate = useNavigate();
  return (
    <article className="user-card">
       <img
          src={user.foto_perfil? user.foto_perfil : "https://cdn.builder.io/api/v1/image/assets/TEMP/cf81e9eb4f779150f9c8b3aa1d54f125bba9b94d3106e925ce5c3bc3a7334b02?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"}
          alt="Profile picture"
          className="profile-mini-image"
        />
      <div className="user-info">
        <h3 className="user-name">{user.nombre} {user.apellido}</h3>
        <p className="user-role">{user.tipoRegistro}</p>
      </div>

      <button className="view-button" onClick={()=>navigate(`/userman/${uid}`)}>Ver usuario</button>
    </article>
  );
};

export default UserCard;
