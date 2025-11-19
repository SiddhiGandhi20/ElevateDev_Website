import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../only_logo-removebg-preview.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
          <img
            src={logo}
            alt="ElevateDev Company Logo"
            className="logo-img"
            width="80"
            height="80"
          />
          <span className="logo-text">ElevateDev</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav" aria-label="Main Navigation">
          <a href="#about" title="About ElevateDev">About</a>
          <a href="#services" title="View our Services">Services</a>
          <a href="#contact" title="Contact ElevateDev">Contact</a>
        </nav>

        {/* Hamburger button */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          role="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          tabIndex="0"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`nav-mobile ${menuOpen ? "active" : ""}`}
        aria-hidden={!menuOpen}
        aria-label="Mobile Navigation Menu"
      >
        {/* Close button */}
        <div
          className="close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
          role="button"
          tabIndex="0"
        >
          ✕
        </div>

        {/* Logo centered */}
        <div className="mobile-logo">
          <img
            src={logo}
            alt="ElevateDev Company Logo"
            width="80"
            height="80"
          />
          <h2 className="mobileh2">ElevateDev</h2>
        </div>

        {/* Links */}
        <a href="#home" onClick={() => setMenuOpen(false)} title="Home">
          Home
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)} title="About Us">
          About
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)} title="Our Services">
          Services
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)} title="Contact Us">
          Contact
        </a>
      </nav>
    </>
  );
}
