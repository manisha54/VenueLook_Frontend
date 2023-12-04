import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { RequireAuth } from './utils/RequireAuth';
import { AuthProvider } from './utils/authContext';
import Contact from './components/contact';
import Register from './components/Register';
import About from './components/aboutus';
import VenueDetails from './components/VenueDetails';
import BookingVenue from './components/BookingVenue';
import BookingList from './components/BookingList';
import Profile from './components/profile';
import Addvenue from './components/Addvenue';
import Allusers from './components/Allusers';



function App() {
  return (

    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/userprofile' element={<Profile />}></Route>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/venues/:id' element={<VenueDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/bookings/:id' element={<RequireAuth><BookingVenue /></RequireAuth>} />
        <Route path='/allBookings' element={<RequireAuth>< BookingList /></RequireAuth>} />
        <Route path='/addvenue' element={<RequireAuth>< Addvenue /></RequireAuth>} />
        <Route path='/allusers' element={<RequireAuth>< Allusers /></RequireAuth>} />


      </Routes>
    </AuthProvider>

  );
}

export default App;
