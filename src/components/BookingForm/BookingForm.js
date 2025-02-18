import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate }); // Fetch new times
  };

  return (
    <form>
      <label htmlFor="res-date">Choose Date</label>
      <input id="res-date" type="date" value={date} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose Time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="" disabled>Select a time</option>
        {availableTimes.map((timeOption, index) => (
          <option key={index} value={timeOption}>{timeOption}</option>
        ))}
      </select>
    </form>
  );
};

export default BookingForm;
