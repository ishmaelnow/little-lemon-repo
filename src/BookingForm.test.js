import React from "react";
import "@testing-library/jest-dom"; // ✅ Ensures we can use toBeInTheDocument()
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm/BookingForm";

test("Renders the BookingForm labels", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

  // ✅ Check if labels exist
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
});

test("Updates date input when changed", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

  // ✅ Select the date input and change its value
  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: "2025-02-19" } });

  expect(dateInput.value).toBe("2025-02-19"); // ✅ Expect the input to update
});

test("Updates time selection when changed", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

  // ✅ Select the dropdown and change its value
  const timeSelect = screen.getByLabelText(/choose time/i);
  fireEvent.change(timeSelect, { target: { value: "18:00" } });

  expect(timeSelect.value).toBe("18:00"); // ✅ Expect dropdown to update
});

test("Calls dispatch when date is selected", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

  // ✅ Change the date input
  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: "2025-02-19" } });

  expect(mockDispatch).toHaveBeenCalledTimes(1); // ✅ Expect dispatch to be called
  expect(mockDispatch).toHaveBeenCalledWith({ type: "UPDATE_TIMES", payload: "2025-02-19" });
});
