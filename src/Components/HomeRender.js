import React from 'react';
import Hero from '../Components/HomePage/Hero/Hero';
import Stripe from './AStripe/Stripe';
import Contact from './Contact/Contact';
const HomeRender = () => {
  return (
    <div>
      <Hero />
  
      <Contact/>
      <Stripe />
    </div>
  );
}

export default HomeRender;
