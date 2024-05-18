import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Form submits with valid input', async () => {
  render(<BookingForm />);
  fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByPlaceholderText('Number of Guests'), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2024-05-20' } });
  fireEvent.change(screen.getByLabelText('Time'), { target: { value: '18:00' } });
  fireEvent.click(screen.getByText('Submit'));
  await waitFor(() => expect(screen.queryByText('Please fill in all fields')).toBeNull());
});

test('Form shows error message on submit with invalid input', async () => {
  render(<BookingForm />);
  fireEvent.click(screen.getByText('Submit'));
  await waitFor(() => expect(screen.getByText('Please fill in all fields')).toBeInTheDocument());
});