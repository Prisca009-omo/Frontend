import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        
        <div className="hero-text">
          <h1>Handyman & Remodeling Services</h1>
          <p>
            This is an eco-friendly services providing 
            reliable, green-focused handyman solutions
            for all your home needs.
          </p>
          <a href="#services" className="btn btn-primary">Book Your Schedule</a>
        </div>

    
        <div className="hero-image">
      
        </div>

      
        <div className="hero-form shadow">
          <h3>pick the Services you Want</h3>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <select>
              <option>Services type</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Carpentry</option>
              <option>Painting</option>
            </select>
            <button type="submit" className="btn btn-secondary">
              Get Schedule
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;

