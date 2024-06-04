import React from "react";
import "./About.css";
import about_img from "../../assets/about-img.jpeg";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT COMPANY</h3>
        <h2>
          Navigate your journey seamlessly with our water transportation website
        </h2>
        <p>
          Our website offers you the convenience of easily booking water bottles
          and campers online, enhancing your travel experience. We also provide
          the option of home delivery, ensuring that you can fulfill this
          necessity from the comfort of your own home. Now, book water bottles
          and campers online hassle-free and have them delivered right to your
          doorstep, only on our website
        </p>
        <p>
          Catering to your travel needs seamlessly, our website simplifies the
          process of booking water bottles and campers online, with the added
          convenience of home delivery. Experience the ease of planning your
          journey with us. Book now and embark on your adventure worry-free
        </p>
      </div>
    </div>
  );
};

export default About;
