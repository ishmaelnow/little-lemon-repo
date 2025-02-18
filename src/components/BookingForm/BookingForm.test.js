import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
    // ✅ Mock available times
    const mockAvailableTimes = ["17:00", "18:00", "19:00"];

    render(<BookingForm availableTimes={mockAvailableTimes} />);
    // ✅ Check if "Book Now" heading is in the document
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});
