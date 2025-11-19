import React from "react";
import "./Footer.css";
import logo from "../only_logo-removebg-preview.png";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* Brand Section */}
       <div className="footer-brand">
  <img 
    src={logo} 
    alt="ElevateDev Logo" 
    className="footer-logo-img"
    loading="lazy"
  />

  <h2 className="footer-logo">ElevateDev</h2>

  <p>
    We elevate your digital presence with creativity & technology.
    Empowering businesses with websites, branding & digital solutions.
  </p>
</div>


        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <h3>Connect</h3>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/elevatedev.in?igsh=MXJ0NDd4bDdlbnBsZg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/elevatedevv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/917028301721"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 ElevateDev. All Rights Reserved.
      </div>
    </footer>
  );
}
