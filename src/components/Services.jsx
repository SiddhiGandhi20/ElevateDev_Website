import React from "react";
import "./Services.css";
import { FaPaintBrush, FaLaptopCode, FaCogs, FaBullhorn } from "react-icons/fa";

export default function Services() {
  return (
    <section
      id="services"
      className="services"
      aria-labelledby="services-title"
    >
      {/* SEO-Optimized H2 */}
      <h2 id="services-title" className="services-title">
        ElevateDev Premium Digital Services
      </h2>

      {/* SEO-Rich Subtext */}
      <p className="services-subtext">
        ElevateDev provides professional web development, social media marketing,
        software development, and creative design services across India. Our solutions
        help businesses grow online and build strong digital brands.
      </p>

      <div className="service-grid">
        {/* Web Development */}
        <div className="service-card" aria-label="Web Development Service in India">
          <FaLaptopCode className="service-icon" aria-hidden="true" />
          <h3>Web Development</h3>
          <p>
            Fast, responsive, and visually stunning websites built with modern
            technologies. ElevateDev ensures optimal user experience, mobile
            responsiveness, and SEO-friendly designs for businesses in India.
          </p>
        </div>

        {/* Social Media Marketing */}
        <div className="service-card" aria-label="Social Media Marketing Service in India">
          <FaBullhorn className="service-icon" aria-hidden="true" />
          <h3>Social Media Marketing</h3>
          <p>
            Strategic marketing campaigns on Facebook, Instagram, and Google Ads
            that increase engagement, visibility, and conversions. ElevateDev
            helps your brand reach the right audience in India effectively.
          </p>
        </div>

        {/* Software Development */}
        <div className="service-card" aria-label="Custom Software Development Service in India">
          <FaCogs className="service-icon" aria-hidden="true" />
          <h3>Software Development</h3>
          <p>
            Custom, scalable software solutions to optimize workflow, automate
            business tasks, and improve operational efficiency for Indian
            businesses.
          </p>
        </div>

        {/* Logo Design */}
        <div className="service-card" aria-label="Logo Design Service in India">
          <FaPaintBrush className="service-icon" aria-hidden="true" />
          <h3>Logo Design</h3>
          <p>
            Creative and memorable logos that define brand identity. ElevateDev
            ensures modern aesthetics and professional design for businesses across India.
          </p>
        </div>
      </div>
    </section>
  );
}
