import React from 'react';
import Hero from '../Components/HomePage/Hero/Hero';
import Stripe from './AStripe/Stripe';
import ContactHomePage from './HomePage/ContactHomePage/ContactHomePage';
import Aboutus from './HomePage/AboutUs/Aboutus';

const HomeRender = () => {
  return (
    <div>
      <Hero />
      <Aboutus />
      <ContactHomePage/>
      <Stripe />
    </div>
  );
}

export default HomeRender;
