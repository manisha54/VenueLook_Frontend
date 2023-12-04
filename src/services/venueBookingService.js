import axios from "axios"

const baseUrl = 'http://localhost:3007/bookings'

const getToken = () => `bearer ${window.localStorage.getItem('token')}`

const createBookingVenue = (venueId, bookings) => {
    console.log(bookings)
    return axios.post(`${baseUrl}/${venueId}`, bookings, {
        headers: { Authorization: getToken() }
    })
}

const getAllBookingVenue = () => {
    return axios.get(`${baseUrl}/allbookings`, {
        headers: { Authorization: getToken() }
    })
}

const deleteBookingVenue = (bookingId) => {
    return axios.delete(`${baseUrl}/${bookingId}`, {
        headers: { Authorization: getToken() }
    });
};


const updateBookingVenue = (bookingId, updatedBooking) => {
    return axios.put(`${baseUrl}/${bookingId}`, updatedBooking, {
        headers: { Authorization: getToken() }
    });
}
const venueBookingservice = {
    createBookingVenue,
    getAllBookingVenue,
    deleteBookingVenue,
    updateBookingVenue
}


export default venueBookingservice