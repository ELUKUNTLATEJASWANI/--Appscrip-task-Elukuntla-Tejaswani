// src/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // You will create this CSS file next

const Header = () => {
  return (
    <header>
      <div className="top-header">
        <div className="logo">LOGO</div>
        <div className="header-icons">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faShoppingBag} />
          <FontAwesomeIcon icon={faUser} />
          <div className="dropdown">
            ENG <i className="fa fa-caret-down"></i>
          </div>
        </div>
      </div>
      <nav className="bottom-header">
        <ul>
          <li>Shop</li>
          <li>Skills</li>
          <li>Stories</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
