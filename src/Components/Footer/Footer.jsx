import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Twinkle Dells Florist. All rights reserved.</p>
        <div className="footer-address">
          <p>380 Van Heerden St. Gezina, Pretoria, South Africa</p>
        </div>
        <ul className="footer-links">
          <Link to='products' className='li'><li>Products</li></Link>
          
          <Link to='/about' className='li'><li>About</li></Link>
          
          <Link to='/contact' className='li'>Contact</Link>
          
        </ul>
        <div className="footer-socials">
          <a href="https://www.tiktok.com/@twinkledells.florist?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="https://www.instagram.com/twinkledells_florist/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href='https://wa.me/27732643351' target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
