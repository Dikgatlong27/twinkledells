import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="company-overview">
        <h2>Welcome to Twinkile Dells</h2>
        <p>
          At Twinkile Dells, we are passionate about delivering beautiful flowers and
          arrangements to brighten your day. With a keen eye for design and the highest
          quality flowers sourced from trusted suppliers, we create arrangements for all
          occasions—be it weddings, anniversaries, or simple gestures of love.
        </p>
        <p>
          Visit us at our new location: Deo Credo Complex, Nora Avenue, opposite The Grove Mall. We can't wait to welcome you!
        </p>
      </section>
      
      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <p>
          Our mission is to provide the freshest flowers and the best service to our
          customers. We strive to bring joy, beauty, and creativity into people's lives
          through nature's most beautiful gifts. Our vision is to be the leading flower
          shop in the region, known for quality, creativity, and exceptional customer service.
        </p>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/founder.jpg" alt="Founder" />
            <h3>Ngwenya</h3>
            <p>Founder & Lead Florist</p>
          </div>
          
          {/* Add more team members here */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
