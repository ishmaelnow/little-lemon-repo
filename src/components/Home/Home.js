import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Hero from "../Hero/Hero";
import Specials from "../Specials/Specials";
import CustomersSay from "../CustomersSay/CustomersSay";
import AboutSummary from "../AboutSummary/AboutSummary";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="intro">
        <Hero />
        <div className="image-container">
          <img src="/images/salad.png" alt="Salad" className="pogo" />
        </div>
        {/* ✅ Updated Reserve Button to Navigate to Booking Page */}
        <button className="reserve-button" onClick={() => navigate("/booking")}>
          Reserve a Table
        </button>
      </div>
      <Specials />
      <CustomersSay />
      <AboutSummary />
    </div>
  );
};

export default Home;
