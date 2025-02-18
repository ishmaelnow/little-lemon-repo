// src/api.js

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(new Date(date).getDate()); // Ensure date is handled properly

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    console.log("Available times from fetchAPI:", result);
    return result;
};

export const submitAPI = function(formData) {
    console.log("Submitting booking:", formData);
    return true;
};
