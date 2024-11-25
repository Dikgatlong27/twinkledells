import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div className="footer-address">
          <p>123 Your Street, Your City, Your Country</p>
        </div>
        <ul className="footer-links">
          <Link to='products' className='li'><li>Products</li></Link>
          
          <Link to='/about' className='li'><li>About</li></Link>
          
          <Link to='/contact' className='li'>Contact</Link>
          
        </ul>
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
