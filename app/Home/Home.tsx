import React from 'react' 
import HeroSection from './Hero/Hero'
import Service from './Service/Service'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection/>
      <Service/>
    </div>
  )
}

export default Home
