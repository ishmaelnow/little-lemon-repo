import React, { useState } from "react";
import BookingForm from "../BookingForm/BookingForm"; // ✅ Ensure BookingForm is imported
import "./BookingPage.css";

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  const [showForm, setShowForm] = useState(false); // ✅ Controls whether form is displayed

  return (
    <div className="booking-container">
      <h2>Available Booking Times</h2>
      <ul className="time-list">
        {availableTimes.map((time, index) => (
          <li key={index} className="time-item">
            {time} <button onClick={() => setShowForm(true)}>Book</button> {/* ✅ Clicking shows the form */}
          </li>
        ))}
      </ul>

      {/* ✅ Show the form when a time is selected */}
      {showForm && (
        <div className="booking-form-container">
          <h2>Enter Booking Details</h2>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>
      )}
    </div>
  );
};

export default BookingPage;
