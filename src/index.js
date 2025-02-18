import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import
import App from "./App";

// below is the index.html version.
//ReactDOM.render(<h1>Hello, Little Lemon!</h1>, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);