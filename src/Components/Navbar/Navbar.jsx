import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { GiTwirlyFlower, GiFireFlower } from "react-icons/gi";

import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <nav>
        <Link to='/' className="nav-logo">
          <img src="./logo txt trans bg.png" alt="logo" srcset="" />
        </Link>
        <ul className='flex-center nav-links'>
          <Link to='/' className='li'><li>Home</li></Link>
          <Link to='/about' className='li'><li>About</li></Link>
          <Link to='/contact' className='li'>Contact</Link>
          <Link to='/products' className='li'>Products</Link>
        </ul>
      </nav>


      
      <div className='mobile-nav'>
        <GiFireFlower className='toggle-menu-open' onClick={() => setToggleMenu(true)} />
        <Link to='/' className="nav-logo-mobile">
          <img src="./logo txt trans bg.png" alt="logo" srcset="" />
        </Link>

        {toggleMenu && (
          <div className='flex-col nav-links-mobile nav-overlay scale-in-hor-left slit-out-vertical'>
            <GiTwirlyFlower className='toggle-menu-close' onClick={() => setToggleMenu(false)} />

            <ul className='flex-col nav-links-mobile-li'>
              <Link to='/' className='li' onClick={() => setToggleMenu(false)}><li>Home</li></Link>
              <hr />
              <Link to='/about' className='li' onClick={() => setToggleMenu(false)}><li>About</li></Link>
              <hr />
              <Link to='/contact' className='li' onClick={() => setToggleMenu(false)}>Contact</Link>
              <hr />
              <Link to='/products' className='li' onClick={() => setToggleMenu(false)}>Products</Link>
              <hr />
            </ul>
            
            <div className="mobile-icons flex-center">
              <TiSocialFacebook className='icon' onClick={() => setToggleMenu(false)} />
              <TiSocialInstagram className='icon' onClick={() => setToggleMenu(false)} />
            </div>
          </div>
        )}
      </div>
      
    </>
  )
}

export default Navbar
