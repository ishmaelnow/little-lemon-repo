// src/components/Home/Home.js
import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero"; // Corrected path
import Specials from "../Specials/Specials"; // Corrected path
import CustomersSay from "../CustomersSay/CustomersSay"; // Corrected path
import AboutSummary from "../AboutSummary/AboutSummary"; // Corrected path

const Home = () => {
  return (
    <div>
      <div className="intro">
        <Hero />
        <div className="image-container">
          <img src="/images/salad.png" alt="Salad" className="pogo" />
        </div>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <Specials />
      <CustomersSay />
      <AboutSummary />
    </div>
  );
};

export default Home;
