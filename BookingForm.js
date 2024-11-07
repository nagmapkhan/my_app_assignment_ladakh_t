
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    rooms: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Submitted');
  };

  return (
    <section className="booking-form">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Check-In
          <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />
        </label>
        <label>
          Check-Out
          <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />
        </label>
        <label>
          Rooms
          <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} min="1" />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default BookingForm;
