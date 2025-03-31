import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Twinkle Dells Florist</h1>
        <p>Bringing Nature's Beauty to Your Doorstep</p>
        <p>Now Open! Place Your Orders Today.</p>
        <a
          href='https://wa.me/27732643351'
          className="hero-button whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
