import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main"; // ✅ Ensure correct import

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Main /> {/* ✅ Routes are inside Main now */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
