import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import venueBookingservice from '../services/venueBookingService';
import NavBar from './Home/NavBar';
import { toast } from 'react-toastify'; // Add this import

export default function BookingVenue() {
  const { id } = useParams();
  console.log(id);
  const [bookings, setBookings] = useState({
    time: '',
    date: '',
  });

  const handleBooking = (e) => {
    e.preventDefault();
    console.log(bookings);
    venueBookingservice
      .createBookingVenue(id, bookings)
      .then((res) => {
        console.log(res.data);
        toast.success('Booking successfully', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Clear the input fields after successful registration
        setBookings({
          time: '',
          date: '',
        });
      })
      .catch((err) => window.alert(err.response.data.error));
  };

  return (
    <div>
      <NavBar />
      <div className='page-head1'>
        <div className="booking-form">
          <div className="form-row">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="time"
              value={bookings.time}
              onChange={(e) => setBookings({ ...bookings, time: e.target.value })}
              className="time-input"
            />
          </div>
          <div className="form-row">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={bookings.date}
              onChange={(e) => setBookings({ ...bookings, date: e.target.value })}
              className="time-input"
            />
          </div>

          <div className="form-col">
            <button onClick={handleBooking}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
