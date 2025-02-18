import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'; 

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/specials">Specials</Link></li>
                <li><Link to="/customerSay">CustomersSay</Link></li>
                <li><Link to="/about-summary">About</Link></li>
                <li><Link to="/chicago">Chicago</Link></li>
                <li><Link to="/booking">Booking</Link></li>  {/* ✅ Added Booking Link */}
            </ul>
        </nav>
    );
}

export default Navigation;
