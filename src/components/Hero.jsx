import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>HIV Smart Care</h1>
          <h2>IoT and AI-Based HIV Care and Decision Support</h2>
          <p>
            Revolutionizing HIV care through intelligent IoT monitoring, 
            AI-based behavioural risk assessment, and machine learning-driven 
            treatment optimization. The system provides continuous 
            patient monitoring, behavioral risk evaluation, 
            and predictive clinical decision support 
            to improve healthcare outcomes.
          </p>
          <div className="hero-buttons">
            <a href="#project-scope" className="btn">Learn More</a>
            <a href="#methodology" className="btn btn-outline">Our Approach</a>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 