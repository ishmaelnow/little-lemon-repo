import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Specials from "../Specials/Specials";
import CustomersSay from "../CustomersSay/CustomersSay";
import AboutSummary from "../AboutSummary/AboutSummary";
import Chicago from "../Chicago/Chicago";
import BookingPage from "../BookingPage/BookingPage";
import ConfirmedBooking from "../ConfirmedBooking/ConfirmedBooking";

const AppRoutes = ({ availableTimes, dispatch, submitForm, lastBooking }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/specials" element={<Specials />} />
      <Route path="/customers-say" element={<CustomersSay />} />
      <Route path="/about-summary" element={<AboutSummary />} />
      <Route path="/chicago" element={<Chicago />} />
      <Route 
        path="/booking" 
        element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} 
      />
      <Route path="/confirmed" element={<ConfirmedBooking lastBooking={lastBooking} />} /> {/* ✅ Pass lastBooking */}
    </Routes>
  );
};

export default AppRoutes;
