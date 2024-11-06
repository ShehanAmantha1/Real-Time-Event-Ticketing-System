// Slideshow.js
import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS for styling

const slides = [
    {
        id: 1,
        image: '/Assets/images/music.jpg', // Replace with your image paths
        title: 'Event 1',
        description: 'Description for Event 1',
        date: '2024-11-20',
    },
    {
        id: 2,
        image: '/Assets/images/food.jpg',
        title: 'Event 2',
        description: 'Description for Event 2',
        date: '2024-12-05',
        
    },
    {
        id: 3,
        image: '/Assets/images/sports.jpg',
        title: 'Event 3',
        description: 'Description for Event 3',
        date: '2024-12-10',
    },
];

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slideshow-container">
            <div className="slideshow">
                <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="slide-image" />
                
                
            </div>
            <div className="slideshow-navigation">
                <button onClick={prevSlide} className="nav-button">❮</button>
                <button onClick={nextSlide} className="nav-button">❯</button>
            </div>
            <div className="slide-indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
