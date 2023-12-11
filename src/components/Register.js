import React, { useState } from 'react'
import userService from '../services/userService'
import { toast } from 'react-toastify'; // Add this import

export default function Register() {
  const [credentials, setCredentials] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNumber: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    userService.register(credentials)
      .then((res) => {
        console.log(res.data);
        toast.success('Register successfully', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Clear the input fields after successful registration
        setCredentials({
          fName: "",
          lName: "",
          email: "",
          phoneNumber: "",
          password: ""
        });
        setErrorMessage('');
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error); // Set error message on registration failure
      });
  }
  return (
    <div>
      <div className="register-page" data-testid="register-component">
        <div className="register-container">
          <h2>Register TO VENUE LOOK</h2>
          <form>
            <input
              type="text"
              placeholder="First Name"
              value={credentials.fName}
              onChange={(e) => setCredentials({ ...credentials, fName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={credentials.lName}
              onChange={(e) => setCredentials({ ...credentials, lName: e.target.value })} />
            <input
              type="text"
              placeholder="Phone Number"
              value={credentials.phoneNumber}
              onChange={(e) => setCredentials({ ...credentials, phoneNumber: e.target.value })}
            />
            <input
              type="email"
              placeholder="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="password"
              value={credentials.password}
              onChange={(e) => {
                setCredentials({ ...credentials, password: e.target.value });
                setErrorMessage(''); // Clear error message while typing in password field
              }}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button
              type="submit"
              onClick={handleSubmit}
            >Register</button>
          </form>
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  )
}
