// src/Components/AStripe/StripeHeader.js
import React from 'react';
import './Stripe.css'; // Ensure you import the CSS file

const StripeHeader = () => {
  return (
    <div className="stripe-header">
      <p>116 E. Warren Street, Shelby, NC | (704) 481-7285</p>
      <p></p>
      <p>Monday-Saturday 11 a.m. - 10 p.m. | Closed Sunday</p>

      <a href="/order-online">ORDER ONLINE</a>
    </div>
  );
}

export default StripeHeader;
