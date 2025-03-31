import './ContactUs.css';
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mnnqlenn");
  if (state.succeeded) {
      return <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', fontSize: '30px' }}>Message sent successfully!</p>;
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
        <p>380 Van Heerden St. Gezina, Pretoria, South Africa</p>

        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.tiktok.com/@twinkledells.florist?lang=en" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://www.instagram.com/twinkledells_florist/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>

      <iframe src="https://maps.google.com/maps?q=380%20Van%20Heerden%20St.%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"  title='Twinkle Dells Florist Location'>
      </iframe>
       
    </div>
  );
};

export default ContactUs;
