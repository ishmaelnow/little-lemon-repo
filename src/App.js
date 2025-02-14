// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Specials from './components/Specials/Specials';
import Testimonials from './components/Testimonials/Testimonials';
import AboutSummary from './components/AboutSummary/AboutSummary';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/specials" element={<Specials />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/about-summary" element={<AboutSummary />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
