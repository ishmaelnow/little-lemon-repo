import React, { useReducer, useEffect } from "react";
import AppRoutes from "../Routes/AppRoutes";
import { fetchAPI, submitAPI } from "../../api"; // ✅ Adjusted Import Path

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

    return (
        <main>
            <AppRoutes availableTimes={availableTimes} dispatch={dispatch} />
        </main>
    );
};

export default Main;
