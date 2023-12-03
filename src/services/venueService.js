import axios from "axios"

const baseUrl = 'http://localhost:3001/venues'
const getToken = () => `bearer ${window.localStorage.getItem('token')}`

const getAllVenues = () => {
    return axios.get(baseUrl, {
        headers: { Authorization: getToken() }
    })
}

const getVenueById = (venueId) => {
    return axios.get(`${baseUrl}/${venueId}`, {
        headers: { Authorization: getToken() }
    })
}


const addvenue = (newVenue) => {
    return axios.post(baseUrl, newVenue, {
        headers: { Authorization: getToken() }
    })
}

const deletevenue = (venueId) => {
    return axios.delete(`${baseUrl}/${venueId}`, {
        headers: { Authorization: getToken() }
    })
}


const getAllReviews = (venueId) => {
    return axios.get(`${baseUrl}/${venueId}/reviews`, {
        headers: { Authorization: getToken() }
    })
}

const addReviews = (venueId, reviewData) => {
    return axios.post(`${baseUrl}/${venueId}/reviews`, reviewData, {
        headers: { Authorization: getToken() },
    });
};

const deleteReviews = (venueId, reviewId) => {
    return axios.delete(`${baseUrl}/${venueId}/reviews/${reviewId}`, {
        headers: { Authorization: getToken() }
    })
}

const updateReviews = (venueId, reviewId, updatedReview) => {
    return axios.put(`${baseUrl}/${venueId}/reviews/${reviewId}`, updatedReview, {
        headers: { Authorization: getToken() },
    });
};

const uploadImage = (imageData) => {
    const formData = new FormData();
    formData.append('photo', imageData);

    return axios.post(`http://localhost:3001/upload/`, formData, {
        headers: {
            Authorization: getToken(),
            'Content-Type': 'multipart/form-data' // Important for file uploads
        }
    });
};
const venueService = {
    getAllVenues,
    getVenueById,
    getAllReviews,
    addvenue,
    addReviews,
    deletevenue,
    deleteReviews,
    updateReviews,
    uploadImage
}
export default venueService