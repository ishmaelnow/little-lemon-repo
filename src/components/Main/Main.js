import React, { useReducer, useEffect, useState } from "react";
import AppRoutes from "../Routes/AppRoutes";
import { fetchAPI, submitAPI } from "../api"; // ✅ Corrected import path
import { useNavigate } from "react-router-dom";

const initializeTimes = () => {
    const today = new Date().toISOString().split("T")[0];
    return fetchAPI(today);
};

const updateTimes = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
        return fetchAPI(action.payload);
    }
    return state;
};

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [lastBooking, setLastBooking] = useState(null);
    const navigate = useNavigate();

    // ✅ Load last booking from localStorage on component mount
    useEffect(() => {
        const savedBooking = localStorage.getItem("lastBooking");
        if (savedBooking) {
            setLastBooking(JSON.parse(savedBooking));
        }
    }, []);

    const submitForm = async (formData) => {
        console.log("Submitting booking:", formData);
        const response = submitAPI(formData);

        if (response) {
            alert("🎉 Booking Successful! Redirecting to confirmation page..."); // ✅ Success message

            setLastBooking(formData); // ✅ Store booking in state
            localStorage.setItem("lastBooking", JSON.stringify(formData)); // ✅ Save to localStorage

            navigate("/confirmed");
        } else {
            alert("Booking submission failed. Please try again.");
        }
    };

    return (
        <main>
            <AppRoutes 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={submitForm} 
                lastBooking={lastBooking} 
            />
        </main>
    );
};

export default Main;
