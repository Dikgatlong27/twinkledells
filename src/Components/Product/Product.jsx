import React from 'react';
import './Product.css';

const images = [
  { id: 1, src: '/gallery/image (1).jpg', alt: 'Beautiful Flowers 1' },
  { id: 2, src: '/gallery/image (2).jpg', alt: 'Beautiful Flowers 2' },
  { id: 3, src: '/gallery/image (3).jpg', alt: 'Beautiful Flowers 3' },
  { id: 4, src: '/gallery/image (4).jpg', alt: 'Beautiful Flowers 4' },
  { id: 5, src: '/gallery/image (5).jpg', alt: 'Beautiful Flowers 5' },
  { id: 6, src: '/gallery/image (6).jpg', alt: 'Beautiful Flowers 6' },
  { id: 7, src: '/gallery/image (7).jpg', alt: 'Beautiful Flowers 7' },
  { id: 8, src: '/gallery/image (8).jpg', alt: 'Beautiful Flowers 8' },
  { id: 9, src: '/gallery/image (9).jpg', alt: 'Beautiful Flowers 9' },
  { id: 10, src: '/gallery/image (10).jpg', alt: 'Beautiful Flowers 10' },
  { id: 11, src: '/gallery/image (11).jpg', alt: 'Beautiful Flowers 11' },
  { id: 12, src: '/gallery/image (12).jpg', alt: 'Beautiful Flowers 12' },
  { id: 13, src: '/gallery/image (13).jpg', alt: 'Beautiful Flowers 13' }
  
];

const Product = () => {
  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Image Gallery</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
