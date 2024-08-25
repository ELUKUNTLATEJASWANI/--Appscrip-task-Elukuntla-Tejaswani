// src/SecondFooter.js
import React from 'react';
import './SecondFooter.css';

function SecondFooter() {
  return (
    <footer className="second-footer">
      <div className="second-footer-left">
        <p>mettā muse Accepts</p>
        <p>About Us</p>
        <p>Stories</p>
        <p>Artisans</p>
        <p>Boutiques</p>
        <p>Contact Us</p>
        <p>EU Compliances Docs</p>
      </div>
      <div className="second-footer-middle">
        <p>Quick Links</p>
        <p>Orders & Shipping</p>
        <p>Join/Login as a Seller</p>
        <p>Payment & Pricing</p>
        <p>Return & Refunds</p>
        <p>FAQs</p>
        <p>Privacy Policy</p>
        <p>Join as a Seller</p>
        <p>Terms & Conditions</p>
      </div>
      <div className="second-footer-right">
        <p>Follow Us</p>
        <p>
          <img src="instagram-logo.png" alt="Instagram" className="social-icon" />
          Instagram
        </p>
        <p>
          <img src="linkedin-logo.png" alt="LinkedIn" className="social-icon" />
          LinkedIn
        </p>
        <p>mettā muse Accepts</p>
      </div>
    </footer>
  );
}

export default SecondFooter;
