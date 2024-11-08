import React, { useState, useEffect } from 'react';
import TicketPurchaseModal from './TicketPurchaseModal'; // Import the modal
import './EventList.css'; // Import a CSS file for styling


const EventListVertical = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // State to manage selected event for purchase modal

  useEffect(() => {
    // Fetch events from an API or database (mocked here)
    const fetchedEvents = [
      { id: 1, name: 'Concert A', date: '2024-11-10', time: '7:00 PM', venue: 'Stadium A', image: '/Assets/images/music.jpg', price: 50 },
      { id: 2, name: 'Concert B', date: '2024-12-15', time: '8:00 PM', venue: 'Arena B', image: '/Assets/images/food.jpg', price: 75 },
    ];
    setEvents(fetchedEvents);
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event); // Set the selected event to show in the modal
  };

  const closeModal = () => {
    setSelectedEvent(null); // Close the modal
  };

  return (
    <div className="event-list-vertical-container">
      <h2>Events Near You</h2>
      <div className="event-list-vertical">
        {events.map(event => (
          <div className="event-card-vertical" key={event.id}>
            <img src={event.image} alt={event.name} className="event-image-vertical" />
            <div className="event-details-vertical">
              <p className="event-date">{event.date} | {event.time}</p>
              <h3 className="event-name">{event.name}</h3>
              <p className="event-venue">{event.venue}</p>
            </div>
            <div className="event-actions-vertical">
              <button className="view-details-button">View Details</button>
              <button className="book-now-button" onClick={() => openModal(event)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
      {/* Conditionally render the modal when an event is selected */}
      {selectedEvent && (
        <TicketPurchaseModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
};

export default EventListVertical;
