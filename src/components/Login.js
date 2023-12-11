import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/authContext';
import userService from '../services/userService';
import { toast } from 'react-toastify'; // Add this import

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userService
      .login(credentials)
      .then((res) => {
        console.log(res.data);
        toast.success('Login successfully', {
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
          email: '',
          password: '',
        });
        auth.setEmail(credentials.email);
        window.localStorage.setItem('token', res.data.token);
        navigate('/');
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error); // Set error message on login failure
      });
  };

  return (
    <div className="login-page" data-testid="login-component">
      <div className="login-container">
        <h2>Login in to VenueLook</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => {
              setCredentials({ ...credentials, password: e.target.value });
              setErrorMessage(''); // Clear error message while typing in password field
            }}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
          <p>
            Don't have an account? <a href={'/register'}>Register Here</a>
          </p>
        </form>
      </div>
    </div>
  );
}
