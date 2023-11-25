import React, { useEffect, useState } from 'react'
import NavBar from './Home/NavBar'
import Carousal from './Home/Carousal'
import AboutUs from './Home/AboutUs';
import Footer from './Home/footer';
import VenueList from './Home/VenueList';
import venueService from '../services/venueService';


export default function Home() {

  const [venues, setVenues] = useState([])

  useEffect(() => {
    venueService.getAllVenues()
        .then(res => {
            console.log(res.data.data)
            setVenues(res.data.data)
        }).catch(err => window.alert(err.response.data.error))
}, [])



  const images = [
    'images/img4.png',
    'images/img2.jpg',
    'images/img5.jpg',
    'images/img7.jpg',
  ];
  return (
    <div>

      <NavBar></NavBar>
      <Carousal images={images}></Carousal>
      <AboutUs></AboutUs>
      
      <VenueList
      venues={venues}
      />
     
      <Footer></Footer>
     


    </div>
  )
}
