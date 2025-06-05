import React from 'react' 
import HeroSection from './Hero/Hero'
import Service from './Service/Service'
import DentalAccordionSection from './Accordian/Accordian'
import { Blog1 } from './Blog/Blog'
import { Testimonials } from './Testimonial/Testimonial'
import { AppointmentForm } from './Form/AppointmentForm'

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
