"use client";
import React from "react";
import HeroSection from "./HeroSection";
import "./FinanceAdmin.css";
import TransactionItem from "./TransactionItem";
import { useEffect, useState } from "react";
import { app, db } from "../../credentials";
import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";

function FinanceAdministration() {
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
    <main className="finance-dashboard">
      <HeroSection />
      {usuariosConReservas.map((user)=>{
        return <TransactionItem description={"Transaccion exitosa!!!"}/>
      })}
    </main>
  );
}

export default FinanceAdministration;