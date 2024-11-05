// CategoryBrowse.js
import React from 'react';
import './CategoryBrowse.css'; // Import your CSS for styling

const categories = [
    { name: 'Concerts', image: '/Assets/images/music.jpg' },
    { name: 'Theater', image: '/Assets/images/sports.jpg' },
    { name: 'Sports', image: '/Assets/images/tech.jpg' },
    { name: 'Festivals', image: '/Assets/images/arts.jpg' },
    { name: 'Workshops', image: '/Assets/images/food.jpg' },
];

const CategoryBrowse = () => {
    return (
        <div className="category-browse">
            <h2>Browse by Category</h2>
            <div className="category-list">
                {categories.map((category, index) => (
                    <div
                        className="category-item"
                        key={index}
                        style={{ backgroundImage: `url(${category.image})`, backgroundSize: 'cover' }}
                    >
                        <div className="category-name">{category.name}</div>
                        <img src={category.image} alt={category.name} className="category-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryBrowse;
