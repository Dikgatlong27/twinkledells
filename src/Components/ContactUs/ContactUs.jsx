import './ContactUs.css';
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mnnqlenn");
  if (state.succeeded) {
      return <p style={{ textAlign: 'center', height: '80vh' }}>Message sent successfully!</p>;
  }

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
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
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
