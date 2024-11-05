// Header.js
import React, { useState } from 'react';
import './header.css'; // Import the CSS file for styling
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme

const Header = () => {
    const [eventName, setEventName] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Perform search logic here
        console.log('Searching for:', { eventName, location, date });
        // You can call a function to filter the events based on the inputs
    };

   
    return (
        <header className="header">
            {/* Search Form */}
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Event Name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="search-input"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="search-input"
                />
                <input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            
        </header>
    );
};

export default Header;
