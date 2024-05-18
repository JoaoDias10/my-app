// api/mockAPI.js

let bookings = []; // Store bookings in memory

const addBooking = (booking) => {
  bookings.push(booking);
};

const getAllBookings = () => {
  return bookings;
};

module.exports = {
  addBooking,
  getAllBookings,
};