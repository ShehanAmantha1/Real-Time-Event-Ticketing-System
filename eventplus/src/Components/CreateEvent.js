import React, { useState } from 'react';
import './CreateEvent.css'; // Import your CSS for styling

const CreateEvent = () => {
  // State to handle form data
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    time: '',
    venue: '',
    price: '',
    ticketsLeft: '',
    image: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Event created successfully!');
        // Reset the form or perform any additional actions
        setEventData({
          name: '',
          date: '',
          time: '',
          venue: '',
          price: '',
          ticketsLeft: '',
          image: '',
        });
      } else {
        alert(`Failed to create event: ${result.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="create-event-container">
      <h2>Create a New Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={eventData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="time"
          value={eventData.time}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={eventData.venue}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Ticket Price"
          value={eventData.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="ticketsLeft"
          placeholder="Number of Tickets"
          value={eventData.ticketsLeft}
          onChange={handleInputChange}
          required
        /> 
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={eventData.image}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
