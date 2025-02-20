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



describe("Booking Form", () => {
  test("Submission is disabled if required fields are empty or invalid", () => {
    const mockSubmit = jest.fn();

    render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} submitForm={mockSubmit} />);

    // Select elements
    const nameInput = screen.getByLabelText(/Full Name/i);
    const dateInput = screen.getByLabelText(/Choose Date/i);
    const timeInput = screen.getByLabelText(/Choose Time/i);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    const phoneInput = screen.getByLabelText(/Phone Number/i);
    const submitButton = screen.getByRole("button");

    // Ensure the button is initially disabled
    expect(submitButton).toHaveAttribute("disabled");

    // Simulate filling out some, but not all fields
    fireEvent.change(nameInput, { target: { value: "" } }); // Empty name
    fireEvent.change(dateInput, { target: { value: "2026-01-01" } });
    fireEvent.change(timeInput, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });
    fireEvent.change(phoneInput, { target: { value: "123" } }); // Invalid phone number

    // Try clicking submit
    fireEvent.click(submitButton);

    // Ensure submit function was NOT called
    expect(mockSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");

    // Fix phone number and name, then try again
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(phoneInput, { target: { value: "4698357520" } });

    // Ensure submit button is enabled
    expect(submitButton).not.toHaveAttribute("disabled");

    // Click submit again
    fireEvent.click(submitButton);

    // Ensure submit function is now called
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});

