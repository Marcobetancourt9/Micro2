"use client";
import React from "react";
import UserCard from "./UserCard";
import HeroSection from "./HeroSection";
import { useEffect, useState } from "react";
import { app, db } from "../../credentials";
import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";
import "./UserAdmin.css";

const UserAdministration = () => {
  const [usuariosConReservas, setUsuariosConReservas] = useState([]);

  async function getReservas() {
    const querySnapshot = await getDocs(collection(db, "users"));
    let users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    setUsuariosConReservas(users);
  }

  useEffect(() => {
    getReservas();
  }, []);

  return (
    <main className="admin-container">
      <HeroSection />
      {usuariosConReservas.map((user)=>{
        return <UserCard user={user}/>
      })}
    </main>
  );
};

export default UserAdministration;
