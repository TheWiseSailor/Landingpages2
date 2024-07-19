import React from 'react';
import Hero from '../Components/HomePage/Hero/Hero';
import StripeHeader from '../Components/AStripe/StripeHeader';
import Contact from './Contact/Contact';
const HomeRender = () => {
  return (
    <div>
      <Hero />
      <StripeHeader />
      <Contact/>
    </div>
  );
}

export default HomeRender;
