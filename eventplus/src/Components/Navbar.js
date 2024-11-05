import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">EventPlus</div>
            <div className="navbar-links">
            <a href="/signup" className="navbar-button">Sign Up</a>
            <a href="/login" className="navbar-button">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;
