import React from "react";
import Navbar from "./components/Navbar/Navbar";

import Programs from "./components/Programs/Programs";
import Title from "./components/Title/title";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Customer from "./components/Customer/Customer";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="Container">
        <Title subTitle="Our Services" title="What We offer" />
        <Programs />
        <About />
        <Title
          subTitle="CUSTOMER SPEAK"
          title="SplashWheels is the highest rated and most searched pure water and online booking brand in India!
          Still not sure? Here is a glimpse of our raving reviews!"
        />
        <Customer />
        <Map/>
        <Footer/>

      </div>
    </div>
  );
};

export default App;
