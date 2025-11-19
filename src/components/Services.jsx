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
      <h2 id="services-title" className="services-title">
        Our Premium Services
      </h2>

      <p className="services-subtext">
        We provide high-end digital solutions crafted to elevate your business
        and brand.
      </p>

      <div className="service-grid">
        {/* Web Development */}
        <div className="service-card" aria-label="Web Development Service">
          <FaLaptopCode className="service-icon" aria-hidden="true" />
          <h3>Web Development</h3>
          <p>
            Fast, responsive, and visually stunning websites built using the
            latest technologies for peak performance and user experience.
          </p>
        </div>

        {/* Social Media Marketing */}
        <div className="service-card">
          <FaBullhorn className="service-icon" />
          <h3>Social Media Marketing</h3>
          <p>
            Effective marketing strategies that help your brand reach the right
            audience through Meta Ads, Google Ads, and organic social media
            campaigns. We focus on increasing engagement, visibility, and
            conversions to strengthen your online presence.
          </p>
        </div>

        {/* Software Development */}
        <div className="service-card" aria-label="Software Development Service">
          <FaCogs className="service-icon" aria-hidden="true" />
          <h3>Software Development</h3>
          <p>
            Custom, scalable software solutions designed to optimize workflow,
            automate tasks, and improve overall business efficiency.
          </p>
        </div>

        {/* Logo Design */}
        <div className="service-card" aria-label="Logo Design Service">
          <FaPaintBrush className="service-icon" aria-hidden="true" />
          <h3>Logo Design</h3>
          <p>
            Professional and memorable logo designs that define your brand
            identity while maintaining modern aesthetics and creativity.
          </p>
        </div>
      </div>
    </section>
  );
}
