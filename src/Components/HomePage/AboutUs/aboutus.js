import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="Aboutus-responsive-container-block Aboutus-bigContainer">
      <div className="Aboutus-responsive-container-block Aboutus-Container">
        <img className="Aboutus-mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg" alt="Our Mission"/>
        <div className="Aboutus-allText Aboutus-aboveText">
          <p className="text-blk Aboutus-headingText">
            Our Mission
          </p>
          <p className="text-blk Aboutus-subHeadingText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-blk Aboutus-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
          </p>
          <button className="Aboutus-explore">
            Explore
          </button>
        </div>
      </div>
      <div className="Aboutus-responsive-container-block Aboutus-Container Aboutus-bottomContainer">
   
      </div>
    </div>
  );
};

export default Aboutus;
