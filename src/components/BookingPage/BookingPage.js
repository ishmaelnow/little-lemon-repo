import React, { useState } from "react";

const BookingPage = ({ availableTimes, dispatch }) => {
  const [bookingData, setBookingData] = useState([]);

  const handleBooking = (time) => {
    const newBooking = {
      id: bookingData.length + 1,
      time: time,
      date: new Date().toISOString().split("T")[0], // Store today's date
    };
    setBookingData([...bookingData, newBooking]); // Update booking list
  };

  return (
    <div>
      <h2>Available Booking Times</h2>
      <ul>
        {availableTimes.map((time, index) => (
          <li key={index}>
            {time} <button onClick={() => handleBooking(time)}>Book</button>
          </li>
        ))}
      </ul>

      <h2>Bookings Table</h2>
      {bookingData.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.time}</td>
                <td>{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings yet.</p>
      )}
    </div>
  );
};

export default BookingPage;
