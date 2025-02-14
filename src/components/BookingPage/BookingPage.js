import React, { useState } from "react";
import "./BookingPage.css"; // Import CSS for styling

const BookingPage = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: 1
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking Confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
        // Here you can send data to a backend or save it in state
    };

    return (
        <div className="booking-container">
            <h2>Book a Table at Little Lemon</h2>
            <form onSubmit={handleSubmit} className="booking-form">
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Date:     <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                </label>
                <label>
                    Number of Guests:
                    <input type="number" name="guests" value={formData.guests} min="1" onChange={handleChange} required />
                </label>
                <button type="submit">Confirm Booking</button>
            </form>
        </div>
    );
};

export default BookingPage;
