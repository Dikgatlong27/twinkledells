import React, { useState } from 'react';
import OrderInfo from '../OrderInfo/OrderInfo';

import './Product.css';

const images = [
  { id: 1, name: "80 Red roses hugged by baby's breath", src: '/gallery/image (1).jpg', alt: 'Beautiful Flowers 1', price: 'R900' },
  { id: 2, name: "40 Pink roses surrounded by baby's breath", src: '/gallery/image (2).jpg', alt: 'Beautiful Flowers 2', price: 'R550' },
  { id: 3, name: "20 Pearl roses surrounded by baby's breath", src: '/gallery/image (3).jpg', alt: 'Beautiful Flowers 3', price: 'R350' },
  { id: 4, name: "Pink garden mixed bunch", src: '/gallery/image (4).jpg', alt: 'Beautiful Flowers 4', price: 'R550' },
  { id: 5, name: "80 Peach roses hugged by baby's breath", src: '/gallery/image (5).jpg', alt: 'Beautiful Flowers 5', price: 'R1,300' },
  { id: 6, name: "20 Fiery roses surrounded by baby's breath", src: '/gallery/image (6).jpg', alt: 'Beautiful Flowers 6', price: 'R350' },
  { id: 7, name: "60 Pink roses hugged by baby's breath", src: '/gallery/image (7).jpg', alt: 'Beautiful Flowers 7', price: 'R900' },
];

const Product = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery-page">
      <OrderInfo />
      <h1 className="gallery-title">Our Flower Bunches</h1>
      <p style={{ marginBottom: '2rem' }}>Tap on an image to see the price and place your order via WhatsApp.</p>
      <div className="gallery-grid">
        {images.map((image) => {
          // Creating a custom message for WhatsApp
          const whatsappMessage = `Hello, I'm interested in ordering: ${image.name} for ${image.price}`;
          // Ensure the message is properly URL-encoded
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
                    <a 
                      href={whatsappLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="whatsapp-order-btn"
                    >
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
