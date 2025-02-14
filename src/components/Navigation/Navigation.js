// src/components/Navigation/Navigation.js
import React from 'react';
import './Navigation.css';  // Make sure to import your CSS file

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservation">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
