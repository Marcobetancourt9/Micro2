"use client";
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/111f266938c4dd50f1edb302a3f24617134ebcee"
        alt="Finance administration background"
        className="hero-bg"
      />
      <div className="hero-content">
        <h1 className="hero-title">Administración de</h1>
        <h2 className="hero-subtitle">FINANZAS</h2>
      </div>
    </section>
  );
}

export default HeroSection;