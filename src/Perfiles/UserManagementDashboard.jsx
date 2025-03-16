"use client";
import React from "react";
import styles from "./UserManagementDashboard.module.css";
import DashboardHeader from "../Header_admin";
import UserProfileCard from "./UserProfileCard";

const users = [
  {
    id: 1,
    name: "Diego Fernández",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/08e634705db821ec837087db17823e0f78856ec330a7562b3f59422950bf32f9?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
  },
  {
    id: 2,
    name: "Ariadna Cagiao",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e1c0fd2925ea570a5a6d836a5d89df6ae84be0a773e2c155c1f84b97bc1ed118?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
  },
  {
    id: 3,
    name: "Daniel Carrero",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ad2feee3bcc5fef352a606da1fe9f26e467a858bd21e0c1c05c367fefd3cdb82?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
  },
  {
    id: 4,
    name: "Sophia Lavie",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b5f92de06760d627601f12124136447d6f01b86132456d9978f8390267552b8b?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
  },
  {
    id: 5,
    name: "Juan González",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/612b2032377827bb6135b2d9a9e62ef9d4599f3b6f5d5fc91b29bc7047bf851e?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
  },
  {
    id: 6,
    name: "Eugenia Salas",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/489eaa0ea508f9b27269faa0331763433a5141afd85172ed74806e82d0fc3cff?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
  },
  {
    id: 7,
    name: "Maria Blanco",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/04f4ef855c6b526639872389b025f0181c41e2de78e512be546bb5f7bee64c2b?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
  },
  {
    id: 8,
    name: "Esteban Maldonado",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6c325828b532a1dfb91e2715a669660381fd85f2e01d289f7177acf5a41402c5?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
  },
  {
    id: 9,
    name: "José Montoya",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ef1c8d7c9bbf0135207c9aad223e9d131c3fda2279f373ab7aa0819a229f2020?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
  },
  {
    id: 10,
    name: "Eva Castillo",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/607f91da04079bf149a04e9659b517c1df6d1aa77f6cbc246f7e1af8df741b2b?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e",
  },
];

const UserManagementDashboard = () => {
  return (
    <main className={styles.dashboard}>
      <DashboardHeader />
      <section className={styles.userGrid}>
        {users.map((user) => (
          <UserProfileCard
            key={user.id}
            name={user.name}
            role={user.role}
            imageUrl={user.imageUrl}
          />
        ))}
      </section>
    </main>
  );
};

export default UserManagementDashboard;
