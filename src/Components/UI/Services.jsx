import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-card">
          <h3>Floral Arrangements</h3>
          <p>We create beautiful, custom floral arrangements for every occasion, from weddings to birthdays and corporate events.</p>
        </div>
        <div className="service-card">
          <h3>Flower Delivery</h3>
          <p>Fast and reliable delivery service to bring flowers to your doorstep, whether it's for a special event or a surprise gift.</p>
        </div>
        <div className="service-card">
          <h3>Event Floral Designs</h3>
          <p>We provide stunning floral designs for events such as weddings, corporate functions, and parties, tailored to your theme and budget.</p>
        </div>
        <div className="service-card">
          <h3>Corporate Gifts</h3>
          <p>Impress clients and employees with custom flower arrangements designed as corporate gifts to celebrate special milestones and events.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
