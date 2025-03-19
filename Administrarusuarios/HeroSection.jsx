import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e71080fb24875db7e6328209de3e50d3236fec37"
        alt="Background"
        className="hero-bg"
      />
      <div className="hero-content">
        <h1 className="hero-title">Administración de</h1>
        <h2 className="hero-subtitle">USUARIO</h2>
      </div>
    </section>
  );
};

export default HeroSection;