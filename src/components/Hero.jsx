import React from "react";
import "./Hero.css";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* Main H1 — Excellent for SEO */}
        <h1 className="hero-title">
          Creative Web Development & Digital Solutions That{" "}
          <span>Elevate Your Brand</span>
        </h1>

        {/* SEO Rich Paragraph */}
        <p className="hero-subtext">
          ElevateDev provides professional web development, social media marketing,
          branding, UI/UX, and software development services across India. We help
          businesses grow through modern digital solutions, clean designs, and high-performance websites.
        </p>

        {/* Extra keyword sentence for ranking */}
        <p className="hero-keywords">
          Web Development • Software Development • Digital Marketing • UI/UX • Branding
        </p>

        <div className="hero-buttons">
          <a
            href="#services"
            className="btn-primary"
            title="Explore Web Development & Digital Services by ElevateDev"
            aria-label="Explore ElevateDev services section"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="btn-secondary"
            title="Contact ElevateDev for Digital Services"
            aria-label="Contact ElevateDev"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={heroImg}
          alt="ElevateDev digital services illustration including web development and design"
          width="500"
          height="500"
          loading="lazy"     // SEO + speed improvement
        />
      </div>
    </section>
  );
}
