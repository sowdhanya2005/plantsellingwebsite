import React from 'react';
import face from '../Assets/Footer/icons8-facebook-48.png';
import insta from '../Assets/Footer/icons8-instagram-48.png';
import twitter from '../Assets/Footer/icons8-twitter-48.png';
import whatsapp from '../Assets/Footer/icons8-whatsapp-48.png';
import youtube from '../Assets/Footer/icons8-youtube-48.png';
import './Footer.css';



export default function Footer() {

  return (
    <div className="App">
    <footer className="footer">
      <div className="footer-section">
        <h4>Foolish Developer</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Vitae, voluptatem corporis error non,</p>
        <div className="social-icons">
        <a href="#"><img src={face} alt="Facebook" /></a>
          <a href="#"><img src={insta} alt="Instagram" /></a>
          <a href="#"><img src={twitter} alt="Twitter" /></a>
          <a href="#"><img src={youtube} alt="YouTube" /></a>
          <a href="#"><img src={whatsapp} alt="WhatsApp" /></a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Why choose us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Client's Feedback</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Terms of use</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Cookie policy</a></li>
  
        </ul>
      </div>
      <div className="footer-section">
        <h4>Newsletter</h4>
        <form>
          <input type="email" placeholder="Your email id here" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  </div>
  )
}
