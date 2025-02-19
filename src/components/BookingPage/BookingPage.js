import React, { useState } from "react";
import "./BookingPage.css"; // ✅ Import styles

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  const [bookingData, setBookingData] = useState([]);

  const handleBooking = (time) => {
    const newBooking = {
      id: bookingData.length + 1,
      name: "John Doe",
      email: "johndoe@example.com",
      time: time,
      date: new Date().toISOString().split("T")[0],
      guests: 2,
      occasion: "Birthday",
    };

    setBookingData([...bookingData, newBooking]);
    submitForm(newBooking);
  };

  return (
    <div className="booking-container">
      <h2>Available Booking Times</h2>
      <ul className="time-list">
        {availableTimes.map((time, index) => (
          <li key={index} className="time-item">
            {time} <button onClick={() => handleBooking(time)}>Book</button>
          </li>
        ))}
      </ul>

      <h2>Bookings Table</h2>
      {bookingData.length > 0 ? (
        <table className="booking-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Time</th>
              <th>Date</th>
              <th>Guests</th>
              <th>Occasion</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.time}</td>
                <td>{booking.date}</td>
                <td>{booking.guests}</td>
                <td>{booking.occasion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-bookings">No bookings yet.</p>
      )}
    </div>
  );
};

export default BookingPage;
