import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle date change and update available times
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "guests") setGuests(value);
    if (id === "phone") setPhone(value);
    if (id === "name") setName(value);
    if (id === "res-time") setTime(value);
  };

  // Validate form inputs before submission
  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time selection is required";
    if (!guests || guests < 1 || guests > 10) newErrors.guests = "Guests must be between 1 and 10";
    if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        submitForm({ name, date, time, guests, phone });
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label htmlFor="name">Full Name</label>
      <input id="name" type="text" value={name} onChange={handleInputChange} required aria-label="Full Name Input" />
      {errors.name && <p className="error" role="alert">{errors.name}</p>}

      <label htmlFor="res-date">Choose Date</label>
      <input id="res-date" type="date" value={date} onChange={handleDateChange} required aria-label="Choose Date Input" />
      {errors.date && <p className="error" role="alert">{errors.date}</p>}

      <label htmlFor="res-time">Choose Time</label>
      <select id="res-time" value={time} onChange={handleInputChange} required aria-label="Choose Time Dropdown">
        <option value="" disabled>Select a time</option>
        {availableTimes.map((timeOption, index) => (
          <option key={index} value={timeOption}>{timeOption}</option>
        ))}
      </select>
      {errors.time && <p className="error" role="alert">{errors.time}</p>}

      <label htmlFor="guests">Number of Guests</label>
      <input id="guests" type="number" value={guests} onChange={handleInputChange} min="1" max="10" required aria-label="Number of Guests Input" />
      {errors.guests && <p className="error" role="alert">{errors.guests}</p>}

      <label htmlFor="phone">Phone Number</label>
      <input id="phone" type="text" value={phone} onChange={handleInputChange} required aria-label="Phone Number Input" />
      {errors.phone && <p className="error" role="alert">{errors.phone}</p>}

      {loading && <p role="status">Submitting your booking...</p>}
      
      <button type="submit" disabled={Object.keys(errors).length > 0 || loading} aria-label="Submit Button">{loading ? "Submitting..." : "Submit"}</button>
    </form>
  );
};

export default BookingForm;
