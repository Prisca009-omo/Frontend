import React, { useState } from "react";
import ContactForm from "./Home Page/ContactForm";
import AboutUs01 from "./Home Page/AboutUs01";
import Service from "./Home Page/Services";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <img src="/new-logo.png" alt="Logo" />
        </div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="#aboutus01-section">About</a>
          <a href="#services-section">Services</a>
          <a href="#portfolio">Gallery</a>
          <a href="#blog-section">Blog</a>
          <a href="#contactform-section">Contact</a>
        </div>

        <div className="phone">
        <a href="tel:+0000000000">(000) 000 - 0000</a>
      </div>
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
