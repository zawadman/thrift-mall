// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/HomePage.css'; // Import the CSS file

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar />
            <header className="hero-section">
                <h1>Welcome to the Thrift Shop</h1>
                <p>Fall into savings with our cozy collection of second-hand treasures!</p>
            </header>
            
            <section className="product-section">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    {/* Example product cards */}
                    <div className="product-card">
                        <img src="https://via.placeholder.com/150" alt="Product 1" />
                        <h3>Warm Knit Sweater</h3>
                        <p>$20.00</p>
                    </div>
                    <div className="product-card">
                        <img src="https://via.placeholder.com/150" alt="Product 2" />
                        <h3>Vintage Leather Boots</h3>
                        <p>$35.00</p>
                    </div>
                    <div className="product-card">
                        <img src="https://via.placeholder.com/150" alt="Product 3" />
                        <h3>Autumn Scarf</h3>
                        <p>$15.00</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;