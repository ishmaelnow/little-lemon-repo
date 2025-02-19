import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmedBooking.css"; // ✅ Import CSS

const ConfirmedBooking = ({ lastBooking }) => {
    const navigate = useNavigate();

    return (
        <div className="confirmation-container">
            <h2>🎉 Booking Confirmed!</h2>
            {lastBooking ? (
                <div className="confirmation-details">
                    <p><strong>Name:</strong> {lastBooking.name}</p>
                    <p><strong>Email:</strong> {lastBooking.email}</p>
                    <p><strong>Date:</strong> {lastBooking.date}</p>
                    <p><strong>Time:</strong> {lastBooking.time}</p>
                    <p><strong>Guests:</strong> {lastBooking.guests}</p>
                    <p><strong>Occasion:</strong> {lastBooking.occasion}</p>
                </div>
            ) : (
                <p>No booking details available.</p>
            )}

            <button className="home-button" onClick={() => navigate("/")}>Return Home</button>
        </div>
    );
};

export default ConfirmedBooking;
