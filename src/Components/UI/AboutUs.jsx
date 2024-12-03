import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2>About Twinkle Dells</h2>
        <p>
          Twinkle Dells is your go-to flower shop, dedicated to bringing the beauty of nature into your home, workplace, and events. Whether you’re looking for the perfect bouquet for a loved one or elegant floral arrangements for a special occasion, we’ve got you covered. Our mission is to spread joy through the art of flowers, offering the freshest blooms, exceptional service, and unique designs tailored to your needs.
        </p>
        <button className="about-us-button">
          <Link id='explore' to='/products'>Explore Our Flowers</Link></button>
      </div>
    </div>
  );
};

export default AboutUs;
