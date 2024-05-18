// BookingForm.js

import React, { useState } from 'react';
import { addBooking } from '../api/mockAPI';

function BookingForm() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name || !date || !time || !guests) {
            setError('Please fill in all fields');
            return;
        }
        
        addBooking({ name, date, time, guests });
        
        setName('');
        setDate('');
        setTime('');
        setGuests('');
        setError('');
    };

    return (
        <div className="booking-form">
            <h2>Book a Table</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" placeholder="Number of Guests" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BookingForm;