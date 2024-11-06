import React, { useState } from 'react';
import './TicketPurchaseModal.css'; // Import CSS for the modal styling

const TicketPurchaseModal = ({ event, onClose }) => {
  const [quantity, setQuantity] = useState(1); // Default ticket quantity is 1

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(event.ticketsLeft, parseInt(e.target.value)));
    setQuantity(value);
  };

  const handlePurchase = () => {
    // Handle the ticket purchase logic here
    alert(`Purchased ${quantity} tickets for ${event.name} at $${event.price * quantity}`);
    onClose(); // Close the modal after purchase
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Purchase Tickets</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <img src={event.image} alt={event.name} className="modal-image" />
          <h3>{event.name}</h3>
          <p>{event.date} | {event.time}</p>
          <p>{event.venue}</p>
          <p>Price per Ticket: ${event.price}</p>
          <p>Tickets Left: {event.ticketsLeft}</p>

          <div className="ticket-quantity">
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={event.ticketsLeft}
            />
          </div>

          <p>Total Price: ${event.price * quantity}</p>
        </div>
        <div className="modal-footer">
          <button className="purchase-btn" onClick={handlePurchase}>Confirm Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default TicketPurchaseModal;
