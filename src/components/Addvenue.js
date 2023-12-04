import React, { useState } from 'react'
import venueService from '../services/venueService'
import NavBar from './Home/NavBar'
import { toast } from 'react-toastify'; // Add this import
import axios from 'axios';

export default function Addvenue() {
    const [venues, setVenues] = useState([])
    const [selectedFile, setSelectedFile] = useState(null)
    const [newVenue, setNewvenue] = useState({
        venueName: '',
        established: '',
        location: '',
        advancePayment: '',
        spacePreference: '',
        venueType: '',
        contactNumber: '',
        venueHallCapacity: '',
        perPlate: ''
    })


    const handleAdd = (e) => {
        e.preventDefault()
        console.log(newVenue)
        venueService.addvenue(newVenue)
            .then((res) => {
                setVenues(venues.concat(res.data))
                toast.success('Venue added successfully', {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setNewvenue({
                    venueName: '',
                    established: '',
                    location: '',
                    advancePayment: '',
                    spacePreference: '',
                    venueType: '',
                    contactNumber: '',
                    venueHallCapacity: '',
                    perPlate: ''
                });
            }).catch(err => console.log(err))
    }

    const handleUpload = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
      
        console.log(selectedFile);
      
        const formData = new FormData();
        formData.append('photo', selectedFile);
        formData.append('fileName', selectedFile.name);
        console.log(formData);
        axios
          .post('http://localhost:3001/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            console.log(res.data);
            setNewvenue({
              ...newVenue,
              picture: res.data.data,
            });
          })
          .catch((err) => console.log(err));
      };
      

    return (
        <div>
            <NavBar></NavBar>
            <div className="form-container">
                <h2>Add venue</h2>
                <form>
                    <div className="form-group1">
                        <label htmlFor="venueName">Venue Name:</label>
                        <input
                            id="venueName"
                            type="text"
                            value={newVenue.venueName}
                            onChange={(e) => setNewvenue({
                                ...newVenue,
                                venueName: e.target.value
                            })}
                        />

                    </div>
                    <div className="form-group1">
                        <label htmlFor="established" >Established:</label>
                        <input
                            id="established"
                            type="text"
                            value={newVenue.established}
                            onChange={(e) => setNewvenue({
                                ...newVenue,
                                established: e.target.value
                            })}
                        />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="Location">Location:</label>
                        <input
                            id="Location"
                            type="text"
                            value={newVenue.location}
                            onChange={(e) => setNewvenue({
                                ...newVenue,
                                location: e.target.value
                            })}
                        />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="Advance Payment">Advance Payment:</label>
                        <input
                            id="Advance Payment"
                            type="text"
                            value={newVenue.advancePayment}
                            onChange={(e) => setNewvenue({
                                ...newVenue,
                                advancePayment: e.target.value
                            })}
                        />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="SpacePreference">SpacePreference:</label>
                        <input
                            id="SpacePreference"
                            type="text"
                            value={newVenue.spacePreference}
                            onChange={(e) => setNewvenue({
                                ...newVenue,
                                spacePreference: e.target.value
                            })}
                        />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="Venue Type" >Venue Type:</label>
                        <input
                            id="Venue Type"
                            type="text"
                            value={newVenue.venueType}
                            onChange={(e) => setNewvenue({
                                ...newVenue,
                                venueType: e.target.value
                            })}
                        />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="Contact Number">Contact Number:</label>
                        <input
                            id="Contact Number"
                            type="text"
                            value={newVenue.contactNumber}
                            onChange={(e) => setNewvenue({
                                ...newVenue,
                                contactNumber: e.target.value
                            })}
                        />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="VenueHall Capacity">VenueHall Capacity:</label>
                        <input
                            id="VenueHall Capacity"
                            type="text"
                            value={newVenue.venueHallCapacity}
                            onChange={(e) => setNewvenue({
                                ...newVenue,
                                venueHallCapacity: e.target.value
                            })}
                        />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="Per plate">Per plate:</label>
                        <input
                            id="Per plate"
                            type="text"
                            value={newVenue.perPlate}
                            onChange={(e) => setNewvenue({
                                ...newVenue,
                                perPlate: e.target.value
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Picture:</label>
                        <input
                            type="file"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                        <button className="btn" onClick={handleUpload}>
                            Upload
                        </button>
                    </div>

                    <button className="btn" type="submit" onClick={handleAdd}>Add Venue</button>
                </form>

            </div>


        </div>
    )
}
