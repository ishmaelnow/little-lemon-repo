import React from 'react';
import './Hero.css'; // Import CSS from the same folder

const Hero = () => {
    return (
        <>
        <section className="hero">
            <h1 style={{ color: '#ffcc00' }}>Little Lemon</h1>
            <h3 className="hero-text">We are a family-owned Mediterranean restaurant.</h3>
            <h4 className="hero-text">We focus on traditional recipes served with a modern twist.</h4>
            <h4 className="hero-text">Our passion for food is infectious.</h4>
        </section>
        </>
    );
};

export default Hero;
