import React from "react";

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
          <button>Book Your Shedule</button>
        </div>

    
        <div className="hero-image">
      
        </div>

      
        <div className="hero-form shadow">
          <h3>Pick the Services you Want</h3>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <select>
              <option>Services type</option>
              <option>Furniture Assembly</option>
              <option>Gutter Cleaning</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Carpentry</option>
              <option>Painting</option>
              <option></option>
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

