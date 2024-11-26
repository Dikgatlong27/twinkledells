import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Twinkle Dells Florist</h1>
        <p>Bringing Nature's Beauty to Your Doorstep</p>
        <p>Opening Soon!</p>
        <button className="hero-button">See Location</button>
      </div>
    </div>
  );
};

export default HeroSection;
