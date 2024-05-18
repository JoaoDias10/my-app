import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Little Lemon</h1>
            <p>Book your table today!</p>
            <Link to="/booking">Make a Booking</Link>
        </div>
    );
}

export default Home;