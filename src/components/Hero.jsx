import React from "react";
import "./Hero.css";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* SEO-Optimized H1 */}
        <h1 className="hero-title">
          Creative Design & Technology Solutions That <span>Elevate Your Brand</span>
        </h1>

        {/* SEO-Enhanced Intro Paragraph */}
        <p className="hero-subtext">
          At ElevateDev, we specialize in creative design, web development,
          branding, UI/UX, and custom digital solutions. We combine innovation,
          strategy, and cutting-edge technology to build strong online identities
          and help businesses achieve real growth.
        </p>

        {/* Bonus Keyword Line (Improves SEO Relevance) */}
        <p className="hero-keywords">
          Web Development • Branding • UI/UX • Digital Marketing • Software Development
        </p>

        <div className="hero-buttons">
          <a
            href="#services"
            className="btn-primary"
            title="View ElevateDev Services"
            aria-label="View ElevateDev Services"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="btn-secondary"
            title="Contact ElevateDev"
            aria-label="Contact ElevateDev"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-image">
        {/* Better alt + CLS-safe width & height */}
        <img
          src={heroImg}
          alt="ElevateDev creative design and development illustration"
          width="500"
          height="500"
        />
      </div>
    </section>
  );
}
