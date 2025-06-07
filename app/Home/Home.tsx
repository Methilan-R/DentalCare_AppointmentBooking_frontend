import React from 'react'  
import Service from './Service/Service'
import DentalAccordionSection from './Accordian/Accordian'
import { Blog1 } from './Blog/Blog'
import { Testimonials } from './Testimonial/Testimonial'
import { AppointmentForm } from './Form/AppointmentForm'
import HeroSection from './Hero/Hero'
 

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection/>
      <Service/>
      <DentalAccordionSection/>
      <Blog1/>
      <Testimonials/>
      <AppointmentForm/>
    </div>
  )
}

export default Home
