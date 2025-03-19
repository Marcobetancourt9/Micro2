"use client";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import UserProfileCard from "./UserProfileCard";
import "./UserManagementPage.css";
import { useEffect, useState } from "react";
import { db } from "../../../credentials";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router";

function UserManagementPage() {
  let params = useParams()
  const [usuario, setUsuario] = useState();

  async function getReservas() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      if(doc.data().uid == params.id) setUsuario(doc.data());
    });
    
  }

  useEffect(() => {
    getReservas();
  }, []);


  return (
    <section className="management-page">
      <UserProfileCard user={usuario}/>
    </section>
  );
}

export default UserManagementPage;