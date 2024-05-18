import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import BookingForm from './BookingForm';
import BookingList from './BookingList';
import { addBooking, getAllBookings } from '../api/mockAPI';

function App() {
    const [bookings, setBookings] = useState(getAllBookings());

    const handleAddBooking = (booking) => {
        addBooking(booking);
        setBookings(getAllBookings()); // Update bookings state after adding a new booking
    };

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<BookingForm onAddBooking={handleAddBooking} />} />
                <Route path="/bookings" element={<BookingList bookings={bookings} />} />
            </Routes>
        </Router>
    );
}

export default App;