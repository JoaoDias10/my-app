import React from 'react';

function BookingList({ bookings }) {
    return (
        <div>
            <h2>Current Bookings</h2>
            {bookings.length > 0 ? (
                <ul>
                    {bookings.map((booking, index) => (
                        <li key={index}>{`${booking.name} booked for ${booking.guests} on ${booking.date} at ${booking.time}`}</li>
                    ))}
                </ul>
            ) : (
                <p>No bookings made yet.</p>
            )}
        </div>
    );
}

export default BookingList;