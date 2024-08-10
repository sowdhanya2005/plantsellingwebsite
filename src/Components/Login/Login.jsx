// App.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import './Login.css';

const backgroundImages = [
  'url("https://plantsome.ca/cdn/shop/articles/shutterstock_1623681814.jpg?v=1600143457&width=1024")',
  'url("https://img.freepik.com/free-vector/foliage-background_53876-112884.jpg")',
  'url("https://img.freepik.com/free-vector/foliage-background_53876-112886.jpg")'
];

function Login() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change background every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-slider" style={{ backgroundImage: backgroundImages[currentBgIndex] }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

/*function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phoneno: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/reg', formData);
      console.log('User registered:', response.data);
      alert('Registration successful');
    } catch (error) {
      console.error('There was an error registering the user!', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone No:</label>
          <input
            type="text"
            name="phoneno"
            value={formData.phoneno}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
}*/

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', loginData);
      console.log('User logged in:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/home');
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/">Register here</Link></p>
    </div>
  );
}

/*function Home() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="App">
      <h2>Welcome, {user.firstname}!</h2>
      <p>Explore the healing world of medicinal plants.</p>
      <h2>This is your mail id: {user.email}</h2>
    </div>
  );
}*/

export default Login;
