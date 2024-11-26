import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle the form submission, like sending the data to an email or a database.
    alert('Message sent! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Visit Us</h3>
        <p>120 Nora Avenue, Deo Credo Complex,  opposite The Grove Mall</p>

        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/TwinkileDells" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/TwinkileDells" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
