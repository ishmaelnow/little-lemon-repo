import { render, screen } from "@testing-library/react";
import { fetchAPI } from "../../api";
import { updateTimes } from "../Main";

jest.mock("../../api", () => ({
  fetchAPI: jest.fn(),
}));

test("updateTimes updates available times when a date is dispatched", () => {
  const mockAvailableTimes = ["17:00", "18:30", "19:00"];
  fetchAPI.mockReturnValue(mockAvailableTimes);

  const action = { type: "UPDATE_TIMES", payload: "2025-02-18" };
  const newState = updateTimes([], action);

  expect(fetchAPI).toHaveBeenCalledWith("2025-02-18"); // ✅ Ensure API is called with date
  expect(newState).toEqual(mockAvailableTimes); // ✅ Ensure new state is correct
});
