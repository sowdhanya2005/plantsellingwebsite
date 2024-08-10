// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../Assets/Navbar/cart.jpg';
import './Navbar.css';




const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#services">Services</Link></li>
        <li><Link to="#contact">Contact Us</Link></li>
        <li><Link to="#signup">Sign Up</Link></li>
        <li className="cart-container">
          <Link to="/cart">
            <img src={cart} alt="Cart" className="cart-icon" />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>
        </li>
      </ul>
      <Link to="/login">
        <button className="signin-button">Sign In</button>
      </Link>
    </nav>
  );
}

export default Navbar;
