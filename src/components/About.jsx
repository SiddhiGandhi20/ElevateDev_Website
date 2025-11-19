import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <h2 className="about-title">About ElevateDev</h2>

        <p className="about-tagline">
          Empowering businesses with modern design, high-performance development,
          and strategic digital solutions tailored for growth.
        </p>

        <p className="about-description">
          ElevateDev specializes in helping brands grow through innovation,
          creativity, and intelligent technology. We build fast, scalable websites,
          strong brand identities, and result-driven marketing campaigns that help
          businesses thrive in the digital world.
        </p>

        <h3 className="about-subtitle">Industries We Support</h3>

        <div className="industry-grid">
          <div className="industry-card">🏥 Doctors & Healthcare</div>
          <div className="industry-card">🏗️ Builders & Construction</div>
          <div className="industry-card">🏫 Schools & Institutions</div>
          <div className="industry-card">🏬 Retail & Local Businesses</div>
          <div className="industry-card">🏢 Financial Firms & Institutes</div>
          <div className="industry-card">🏛️ Government & Gram Panchayats</div>
          <div className="industry-card">🍽️ Restaurants & Cafes</div>
          <div className="industry-card">✨ Many Other Businesses</div>
        </div>

        <p className="about-end">
          No matter the industry — ElevateDev delivers digital excellence designed for real impact.
        </p>

      </div>
    </section>
  );
}
