// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/CustomersSay/CustomersSay";
import AboutSummary from "./components/AboutSummary/AboutSummary";
import Chicago from "./components/Chicago/Chicago";
import BookingPage from "./components/BookingPage/BookingPage";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about-summary" element={<AboutSummary />} />
          <Route path="/chicago" element={<Chicago />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
