import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../utils/authContext'


export default function NavBar(props) {
  const auth = useAuth()
  return (
    <nav className="nav"data-testid="navbar">
      <div className="menu-icon"><span className="fas fa-bars"></span></div>
      <div className="logo">
        <a href="/"><img src="images/Venuelook.png" alt={props} width="50%" /></a>
      </div>
      <div className="nav-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to='/aboutus'>Aboutus</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </div>

      {/* <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div> */}


      <div className="profile">
        <img src="images/123.png" width="50" height="50" alt="Profile" />
        <div className="dropdown-content">
          <Link to="/userprofile">Your Profile</Link>
          {/* <Link to="allusers">View users</Link> */}
          <Link to="/allBookings">Your Booking</Link>
          <Link to="/addvenue">Addvenue</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Signup</Link>
          <Link to="/login">Logout</Link>
        </div>
      </div>
{/* 
      <div style={{ fontSize: '10', color: 'white' }}>{auth.email}</div> */}
      {auth?.email && <div style={{ fontSize: '10', color: 'white' }}>{auth.email}</div>}



    </nav>
  )
}
