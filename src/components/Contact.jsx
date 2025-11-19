import React from "react";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact ElevateDev — Web Development & Digital Solutions</h2>

      {/* Email Form */}
      <form
        className="contact-form"
        action="mailto:elevatedevsolutions@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          required
          aria-label="Your Name"
          autoComplete="name"
        />
        <input
          type="email"
          name="Email"
          placeholder="Email Address"
          required
          aria-label="Email Address"
          autoComplete="email"
        />
        <textarea
          name="Message"
          placeholder="Write your message..."
          required
          aria-label="Message"
        ></textarea>

        <button type="submit" className="send-btn">
          Send Email
        </button>
      </form>

      {/* WhatsApp Button */}
      <a
        className="whatsapp-btn"
        href="https://wa.me/917028301721"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ElevateDev on WhatsApp"
      >
        <FaWhatsapp className="wa-icon" /> Chat on WhatsApp
      </a>
    </section>
  );
}
