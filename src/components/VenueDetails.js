import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import venueService from '../services/venueService';
import NavBar from './Home/NavBar';
import Footer from './Home/footer';

export default function VenueDetails() {
  const [venues, setVenues] = useState([]);
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [editReviewId, setEditReviewId] = useState(null); // State to store the review ID being edited
  const [newReviews, setNewReviews] = useState({
    text: '',
  });

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const fetchReviews = () => {
    venueService
      .getAllReviews(id)
      .then((res) => {
        console.log(res.data);
        setReviews(res.data);
      })
      .catch((err) => window.alert(err.response.data.error));
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (editReviewId) {
      // If there is an editReviewId, it means we want to update an existing review
      venueService
        .updateReviews(id, editReviewId, { text: newReviews.text })
        .then(() => {
          setNewReviews({ text: '' });
          setEditReviewId(null); // Reset editReviewId after updating
          fetchReviews();
        })
        .catch((err) => console.log(err));
    } else {
      // If there is no editReviewId, it means we want to add a new review
      venueService
        .addReviews(id, newReviews)
        .then(() => {
          setNewReviews({ text: '' });
          fetchReviews();
        })
        .catch((err) => console.log(err));
    }
  };

  const handleEditReview = (reviewId, reviewText) => {
    setNewReviews({ text: reviewText });
    setEditReviewId(reviewId); // Set the reviewId in editReviewId state
    setShowModal(true); // Show the modal for editing the review
  };

  useEffect(() => {
    venueService.getVenueById(id)
      .then(res => {
        console.log(res.data.data)
        setVenues(res.data.data)
      }).catch(err => window.alert(err.response.data.error))
  }, [id])

  useEffect(() => {
    fetchReviews();
  }, [id]);



  const handleDeleteReview = (reviewId) => {
    venueService
      .deleteReviews(id, reviewId)
      .then(() => {
        setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId));
        toast.success('Review deleted successfully', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => console.log(err));
  };


  const handleCancel = () => {
    setNewReviews({ text: '' }); // Clear the new review input
    setShowModal(false); // Close the modal by setting showModal to false
  };



  const handleDelete = (venueId) => {
    venueService
      .deletevenue(id,venueId)
      .then(() => {
        setVenues((prevVenues) => prevVenues.filter((venue) => venue.id !== venueId));
        toast.success('Delete Venue successfully', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error deleting venue. Please try again.');
      });
  };

  return (
    <div>
      {/* <NavBar /> */}

      <div className="venue-layout">
        {venues.map((venue) => (
          <div className="venue-card" key={venue.id}>
            <div className="venue-image">
              <img src={`http://localhost:3007/uploads/${venue.picture}`} alt="Venue" />
            </div>
            <div className="venue-details">
              <h2>{venue.name}</h2>
              <p>Established: {venue.established}</p>
              <p>Location: {venue.location}</p>
              <p>Advance Payment: {venue.advancePayment}</p>
              <p>Space Preference: {venue.spacePreference}</p>
              <p>Venue Type: {venue.venueType}</p>
              <p>Contact Number: {venue.contactNumber}</p>
              <p>Venue Hall Capacity: {venue.venueHallCapacity}</p>
              <p>perPlate: {venue.perPlate}</p>
              <button className="btn">
                <Link to={`/bookings/${venue.id}`}>Booking venue</Link>
              </button>

              <button onClick={() => handleDelete(venue.id)}>delete venue</button>
            </div>
          </div>
        ))}
      </div>

      {/* review section */}
      <div className="review-section">
        <h3>Reviews</h3>
        {reviews === null ? (
          <p>Loading reviews...</p>
        ) : reviews.length > 0 ? (
          <ul className="review-list">
            {reviews.map((review, index) => (
              <li key={index} className="review-item">
                <div className="review-content-wrapper">
                  {review && review.text ? (
                    <p className="review-content">{review.text}</p>
                  ) : (
                    <p>No review text available</p>
                  )}

                  <div className="review-author-wrapper">
                    {review && review.userName ? (
                      <p className="review-author">by {review.userName}</p>
                    ) : (
                      <p>Anonymous</p>
                    )}

                    <div className="review-actions">
                      <button className="edit-button" onClick={() => handleEditReview(review.id, review.text)}>
                        Edit
                      </button>                      <button className="delete-button" onClick={() => handleDeleteReview(review.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available</p>
        )}
      </div>

      <button onClick={toggleModal}>Add review</button>
      {showModal && (
        <div className="modal">
          <input
            type="text"
            value={newReviews.text}
            onChange={(e) => setNewReviews({ text: e.target.value })}
          />
          <button onClick={handleAddReview}>Add</button>
          <button onClick={handleCancel}>Cancel</button> {/* Add the Cancel button */}

        </div>
      )}

      <Footer />
    </div>
  );
}
