import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation'; // Make sure the path is correct

const Header = () => {
    return (
        <header className="header-container">
            <img src="/images/logo.png" alt="Little Lemon Logo" className="logo"/>
            <h3>Welcome to Little Lemon</h3>

            <Navigation />
        </header>
    );
};

export default Header;
