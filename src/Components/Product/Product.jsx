import React from 'react';
import './Product.css';

const products = [
  {
    id: 1,
    name: 'Rose Bouquet',
    price: 'R200',
    image: '/assets/bg/product1.jpg',
    description: 'A beautiful bouquet of fresh roses.',
  },
  {
    id: 2,
    name: 'Tulip Arrangement',
    price: 'R180',
    image: '/assets/bg/product2.jpg',
    description: 'A colorful arrangement of tulips.',
  },
  {
    id: 3,
    name: 'Lily Bouquet',
    price: 'R250',
    image: '/assets/bg/product3.jpg',
    description: 'A stunning bouquet of lilies for any occasion.',
  },
  {
    id: 4,
    name: 'Mixed Flower Basket',
    price: 'R300',
    image: '/assets/bg/product4.jpg',
    description: 'A basket full of mixed flowers for a cheerful gift.',
  },
];

const Product = () => {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <p>Browse through our beautiful selection of fresh flowers and arrangements!</p>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="product-price">{product.price}</span>
              <button className="view-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
