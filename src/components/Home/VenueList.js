


import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function VenueList({ venues }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVenues = venues.filter((venue) =>
    venue.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div className="mini-container" data-testid="venue-list">
        <div className="row row-2">
          <h2 className="title">Popular Venue</h2>
          {/* <select>
            <option>Default Sorting</option>
            <option>Sort by price</option>
            <option>Sort by rating</option>
          </select> */}
        </div>
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by location"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="venue-category">
          {filteredVenues.map((venue) => (
            <div key={venue.id} className="col-4">
              <Link to={`/venues/${venue.id}`} >
                <img src={`http://localhost:3001/uploads/${venue.picture}`} alt="venue" />
              </Link>

              <p className="lead" style={{ fontSize: '30px' }}>
                {venue.venueName},
              </p>
              <p className="lead" style={{ fontSize: '20px', paddingTop: '0px' }}>
                {venue.location}
              </p>
              <p>{venue.perPlate} (perPlate)</p>

            </div>
          ))}
        </div>
        <br />
        <br />
        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>

    </div>
  )
}
