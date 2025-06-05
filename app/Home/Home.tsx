import React from 'react' 
import HeroSection from './Hero/Hero'
import Service from './Service/Service'
import DentalAccordionSection from './Accordian/Accordian'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection/>
      <Service/>
      <DentalAccordionSection/>
    </div>
  )
}

export default Home
