import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      name: 'Rose Bouquet',
      image: '/assets/bg/rose-bouquet.jpg',
      price: 'R250',
    },
    {
      name: 'Tulip Arrangement',
      image: '/assets/bg/tulip-arrangement.jpg',
      price: 'R180',
    },
    {
      name: 'Sunflower Delight',
      image: '/assets/bg/sunflower-delight.jpg',
      price: 'R220',
    },
    {
        name: 'Lily Bouquet',
        image: '/assets/bg/lily-bouquet.jpg', // New product image
        price: 'R280',
      },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="shop-now">Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
