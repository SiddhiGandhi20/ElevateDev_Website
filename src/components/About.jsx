import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-container">

        {/* SEO-Optimized H2 */}
        <h2 id="about-title" className="about-title">
          About ElevateDev – Digital Services & Web Solutions in India
        </h2>

        {/* SEO-Rich Tagline */}
        <p className="about-tagline">
          ElevateDev empowers businesses across India with modern web design,
          high-performance web development, branding, and strategic digital solutions
          tailored for growth.
        </p>

        {/* Keyword-Enhanced Description */}
        <p className="about-description">
          ElevateDev specializes in helping brands grow through innovation, creativity,
          and intelligent technology. We build fast, scalable websites, strong brand
          identities, social media campaigns, and result-driven digital marketing
          strategies that help businesses thrive online.
        </p>

        {/* SEO-Friendly Subtitle */}
        <h3 className="about-subtitle">
          Industries We Serve Across India
        </h3>

        <div className="industry-grid">
          <div className="industry-card" aria-label="Doctors & Healthcare">🏥 Doctors & Healthcare</div>
          <div className="industry-card" aria-label="Builders & Construction">🏗️ Builders & Construction</div>
          <div className="industry-card" aria-label="Schools & Institutions">🏫 Schools & Institutions</div>
          <div className="industry-card" aria-label="Retail & Local Businesses">🏬 Retail & Local Businesses</div>
          <div className="industry-card" aria-label="Financial Firms & Institutes">🏢 Financial Firms & Institutes</div>
          <div className="industry-card" aria-label="Government & Gram Panchayats">🏛️ Government & Gram Panchayats</div>
          <div className="industry-card" aria-label="Restaurants & Cafes">🍽️ Restaurants & Cafes</div>
          <div className="industry-card" aria-label="Other Businesses">✨ Many Other Businesses</div>
        </div>

        <p className="about-end">
          No matter the industry — ElevateDev delivers professional digital services,
          web development, and marketing solutions designed for real business impact in India.
        </p>

      </div>
    </section>
  );
}
