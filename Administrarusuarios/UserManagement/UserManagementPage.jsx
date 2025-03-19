"use client";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import UserProfileCard from "./UserProfileCard";
import "./UserManagementPage.css";

function UserManagementPage() {
  return (
    <section className="management-page">
      <ProfileHeader />
      <UserProfileCard />
    </section>
  );
}

export default UserManagementPage;