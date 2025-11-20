import React from "react";
import "./Footer.css";
import logo from "../only_logo-removebg-preview.png";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" aria-label="ElevateDev Footer – Digital Services & Web Development India">

      <div className="footer-content">

        {/* Brand Section */}
        <div className="footer-brand">
          <img 
            src={logo} 
            alt="ElevateDev Logo – Web Development & Digital Services in India" 
            className="footer-logo-img"
            loading="lazy"
          />

          <h2 className="footer-logo">ElevateDev</h2>

          <p>
            ElevateDev elevates your digital presence with creative web development,
            branding, and software solutions. Empowering businesses across India
            to grow online with modern digital strategies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#about" title="Learn About ElevateDev" aria-label="About ElevateDev">About</a>
          <a href="#services" title="View ElevateDev Services" aria-label="Services by ElevateDev">Services</a>
          <a href="#contact" title="Contact ElevateDev" aria-label="Contact ElevateDev">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <h3>Connect</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/elevatedev.in?igsh=MXJ0NDd4bDdlbnBsZg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow ElevateDev on Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/elevatedevv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow ElevateDev on LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/917028301721"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with ElevateDev on WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom with Keywords for SEO */}
      <div className="footer-bottom">
        © 2025 ElevateDev – Web Development, Software & Digital Services India. All Rights Reserved.
      </div>

    </footer>
  );
}
