import React, { useEffect, useState } from 'react';
import NavBar from './Home/NavBar';
import venueBookingservice from '../services/venueBookingService';
import { toast } from 'react-toastify';

export default function BookingList() {
    const [bookings, setBookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [updatedBooking, setUpdatedBooking] = useState({
        fullName: '',
        date: '',
        time: '',
        venue: '',
    });

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = () => {
        venueBookingservice
            .getAllBookingVenue()
            .then((res) => {
                console.log(res.data.data);
                setBookings(res.data.data);
            })
            .catch((err) => {
                console.error(err);
                toast.error('Error fetching bookings');
            });
    };




    const handleUpdate = (booking) => {
        setSelectedBooking(booking);
        setUpdatedBooking({
            fullName: booking.fullName,
            date: booking.date,
            time: booking.time,
            venue: booking.venue,
        });
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // Make sure selectedBooking is not null
        if (!selectedBooking) {
            console.error('No booking selected for update');
            return;
        }

        // Call the updateBookingVenue function from the service to update the booking
        venueBookingservice
            .updateBookingVenue(selectedBooking.id, updatedBooking)
            .then((res) => {
                console.log(res.data);
                toast.success('Booking updated successfully', {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                // Refresh bookings after update
                fetchBookings();
                // Reset selectedBooking and updatedBooking state
                setSelectedBooking(null);
                setUpdatedBooking({
                    fullName: '',
                    date: '',
                    time: '',
                    venue: '',
                });
            })
            .catch((err) => {
                console.error('Error updating booking:', err); // Log the error
                toast.error('Error updating booking');
                throw err; // Rethrow the error to be caught by the test
            });
    };


    const handleDelete = (bookingId) => {
        // Make sure bookingId is not undefined or null
        if (!bookingId) {
            console.error('Invalid bookingId:', bookingId);
            return;
        }

        // Call the deleteBookingVenue function from the service to delete the booking
        venueBookingservice
            .deleteBookingVenue(bookingId)
            .then((res) => {
                console.log(res.data);
                toast.success('Booking deleted successfully', {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                // Refresh bookings after deletion
                fetchBookings();
            })
            .catch((err) => {
                console.error(err);
                toast.error('Error deleting booking');
            });
    };



    const handleCancelUpdate = () => {
        // Reset the form fields and hide the update form section
        setSelectedBooking(null);
        setUpdatedBooking({
            fullName: '',
            date: '',
            time: '',
            venue: '',
        });
    };
    return (
        <div>
            <NavBar />
            <div className="booking-list" data-testid="booking-list">
                <h2>Your Booked Venues</h2>
                {bookings.length > 0 ? (
                    <table className="booking-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Venue ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.fullName}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.time}</td>
                                    <td>{booking.venue}</td>
                                    <td>
                                        <button onClick={() => handleUpdate(booking)}>Update</button>
                                        <button onClick={() => handleDelete(booking.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="no-booking">No bookings available.</p>
                )}

                {/* Update form */}
                {selectedBooking && (
                    <div className="booking-form">
                        <h3>Update your Booking</h3>
                        <form onSubmit={handleUpdateSubmit}>
                            <label htmlFor="fullName">Full Name:</label>
                            <input
                                type="text"
                                id="fullName"
                                value={updatedBooking.fullName}
                                onChange={(e) => setUpdatedBooking({ ...updatedBooking, fullName: e.target.value })}
                            />
                            <label htmlFor="date">Date:</label>
                            <input
                                type="date"
                                id="date"
                                value={updatedBooking.date}
                                onChange={(e) => setUpdatedBooking({ ...updatedBooking, date: e.target.value })}
                            />
                            <label htmlFor="time">Time:</label>
                            <input
                                type="time"
                                id="time"
                                value={updatedBooking.time}
                                onChange={(e) => setUpdatedBooking({ ...updatedBooking, time: e.target.value })}
                            />
                            <label htmlFor="venue">Venue:</label>
                            <input
                                type="text"
                                id="venue"
                                value={updatedBooking.venue}
                                onChange={(e) => setUpdatedBooking({ ...updatedBooking, venue: e.target.value })}
                            />
                            <button type="submit">Update Booking</button>
                            <button type="button" onClick={handleCancelUpdate}>Cancel</button>

                        </form>
                    </div>
                )}

            </div>
        </div>
    );
}
