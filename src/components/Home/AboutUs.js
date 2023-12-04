import React from 'react'

export default function AboutUs() {
  return (
    <div>
      <div className="about-container" data-testid="aboutus">
        {/* <h1>About Us</h1> */}
        <div className="about-content">
          <img
            className="about-image"
            src="images/img2.jpg"
            alt="About Us"
          />
          <div className="about-text">
            <h1>About Venue Look</h1>
            <br></br>
            <p>
              VenueLook is a venue booking mobile application designed to help users
              find venues for various occasions such as weddings, parties, and meetings.
              This platform provides a convenient way for users to search for book venues
              without any difficulty. Users can book venues as per their location,
              availability and interest, and budget. The application allows users
              to browse a variety of venues, view information about their features,
              and reserve them for particular dates. Moreover, users can also view
              each venue's photos and reviews to make informed decisions.
            </p>
            <p>
              Check the list of the most on demand venue that is available for hire.
              You can book these venue that is at your prefered location with the best price and service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
