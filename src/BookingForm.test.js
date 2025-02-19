// import React from "react";
// import { render, screen } from "@testing-library/react";
// import BookingForm from "./components/BookingForm/BookingForm"; 

// test("Renders the BookingForm heading", () => {
//   const mockAvailableTimes = ["17:00", "18:00", "19:00"];

//   render(<BookingForm availableTimes={mockAvailableTimes} />);

//   const headingElement = screen.getByText("Book Now");
//   expect(headingElement).toBeInTheDocument();
// });

import React from "react";
import "@testing-library/jest-dom"; // ✅ Fix for toBeInTheDocument()
import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm/BookingForm";

test("Renders the BookingForm labels", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
});
