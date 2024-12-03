import React from 'react'
import { Hero, AboutUs, Services, Newsletter } from '../Components/UI'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      {/* <FeaturedProducts /> */}
      <Newsletter />
    </div>
  )
}

export default Home
