import React from 'react';
import Hero from '../Components/HomePage/Hero/Hero';
import Stripe from './AStripe/Stripe';
import ContactHomePage from './HomePage/ContactHomePage/ContactHomePage';
const HomeRender = () => {
  return (
    <div>
      <Hero />
  
      <ContactHomePage/>
      <Stripe />
    </div>
  );
}

export default HomeRender;
