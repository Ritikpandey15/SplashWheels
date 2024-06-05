import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We provide the best camper delivery service to make your travels easier and more enjoyable.</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@camperdelivery.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Camper St, Adventure City, CA 12345</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home" target="_blank" rel="noopener noreferrer">Home</a></li>
            <li><a href="/services" target="_blank" rel="noopener noreferrer">Services</a></li>
            <li><a href="/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
            <li><a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
            <li><a href="/faq" target="_blank" rel="noopener noreferrer">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Subscribe to our Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Camper Delivery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
