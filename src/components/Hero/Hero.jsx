import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.png";
const Hero = () => {
  return (
    <div className="Hero container">
      <div className="hero-text">
        <h2>Efficient Bottled Water Transportation</h2>
        <p>
          Our bottled water is transported using a streamlined logistics
          network, ensuring swift delivery to your doorstep. we guarantee timely
          access to refreshing water wherever you are.
          <button className="btn">
            Book Now
            <img src={arrow} alt="" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
