import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-title">Be the first to know</p>
        <form className="subscribe-form">
          <label htmlFor="email" className="footer-label">Enter your e-mail...</label>
          <input type="email" id="email" className="footer-input" />
          <button type="submit" className="footer-button">Subscribe</button>
        </form>
      </div>
      <div className="footer-right">
        <p>CONTACT US</p>
        <p>Sign up for updates from mettā muse.</p>
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>
        <p>
          Currency: <span className="currency-usd">USD $</span>
          <span className="currency-euro">Transactions will be completed in Euros.</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
