import React, { useState, useEffect } from "react";

const StoredBooking = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const savedBooking = localStorage.getItem("lastBooking");
    if (savedBooking) {
      setBooking(JSON.parse(savedBooking));
    }
  }, []);

  return (
    <div>
      <h2>Stored Booking</h2>
      {booking ? (
        <div>
          <p><strong>Name:</strong> {booking.name}</p>
          <p><strong>Time:</strong> {booking.time}</p>
          <p><strong>Date:</strong> {booking.date}</p>
        </div>
      ) : (
        <p>No booking found.</p>
      )}
    </div>
  );
};

export default StoredBooking;
