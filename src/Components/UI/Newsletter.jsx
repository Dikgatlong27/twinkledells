import './Newsletter.css';
import { useForm, ValidationError } from '@formspree/react';

const Newsletter = () => {
  const [state, handleSubmit] = useForm("mwpkagkg");
  if (state.succeeded) {
      return <p style={{ textAlign: 'center', padding: '2rem' }}>Thanks for Subscribing!</p>;
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name='email'
              placeholder="Enter your email to subscribe"
              
            />
            <ValidationError
             prefix='Email'
             field='email'
             errors={state.errors}
            />
            <button type="submit">Subscribe</button>
          </form>
        
      </div>
    </section>
  );
};

export default Newsletter;
