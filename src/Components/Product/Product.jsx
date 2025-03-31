import React, { useState } from 'react';
import './Product.css';

const images = [
  { id: 1, src: '/gallery/image (1).jpg', alt: 'Beautiful Flowers 1', price: 'R300' },
  { id: 2, src: '/gallery/image (2).jpg', alt: 'Beautiful Flowers 2', price: 'R300' },
  { id: 3, src: '/gallery/image (3).jpg', alt: 'Beautiful Flowers 3', price: 'R500' },
  { id: 4, src: '/gallery/image (4).jpg', alt: 'Beautiful Flowers 4', price: 'R650' },
  { id: 5, src: '/gallery/image (5).jpg', alt: 'Beautiful Flowers 5', price: 'R650' },
  { id: 6, src: '/gallery/image (6).jpg', alt: 'Beautiful Flowers 6', price: 'R650' },
  { id: 7, src: '/gallery/image (7).jpg', alt: 'Beautiful Flowers 7', price: 'R650' },
];

const Product = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Our Flower Bunches</h1>
      <p style={{ marginBottom: '2rem' }}>Tap on an image to see the price and place your order via WhatsApp.</p>
      <div className="gallery-grid">
        {images.map((image) => {
          const whatsappMessage = `Hello, I'm interested in ordering: ${image.alt} for ${image.price}`;
          const whatsappLink = `https://wa.me/27732643351?text=${encodeURIComponent(whatsappMessage)}`;

          return (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelected(selected === image.id ? null : image.id)}
            >
              <img src={image.src} alt={image.alt} className="gallery-image" />
              {selected === image.id && (
                <div className="overlay">
                  <div className="price-tag">
                    <div>{image.price}</div>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-order-btn">
                    Order via WhatsApp
                    </a>
                  </div>
                  
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
