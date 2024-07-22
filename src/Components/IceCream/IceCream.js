import React, { useState } from 'react';
import './IceCream.css';

const IceCream = () => { // Renamed from IceCream to IceCreamPage
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="IceCreamPage-container">
      <div className="IceCreamPage-header">
        <h1>Welcome to Our Ice Cream Shop!</h1>
        <a href="tel:+1234567890" className="IceCreamPage-call-button">Call Us</a>
      </div>
      <div className="IceCreamPage-content">
        <select className="IceCreamPage-dropdown" value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="chocolate">Chocolate</option>
          <option value="vanilla">Vanilla</option>
          <option value="strawberry">Strawberry</option>
          <option value="mint">Mint</option>
        </select>
        <div className="IceCreamPage-grid">
          <div className="IceCreamPage-ice-cream">Chocolate</div>
          <div className="IceCreamPage-ice-cream">Vanilla</div>
          <div className="IceCreamPage-ice-cream">Strawberry</div>
          <div className="IceCreamPage-ice-cream">Mint</div>
        </div>
      </div>
    </div>
  );
};

export default IceCream
