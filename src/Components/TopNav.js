import React, { useState } from 'react';
import './TopNav.css'; // Make sure to create TopNav.css for styling
import SASC_logo1 from '../Assets/SASC_logo1 - Edited 1.png';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-nav">
      <div className='menu-row'>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Unicode character for hamburger icon */}
        </div>
        <a href="/"><img src={SASC_logo1} alt="Welcome to Stonehaven Amateur Swimming Club" width={100}/></a>
      </div>

     
      <ul className={`menu ${isOpen ? "show" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/events">Events / News</a></li>
        <li><a href="/people">People</a></li>
        <li><a href="/links">Links</a></li>
        <li><a href="/contact">Contact</a></li>

      </ul>
    </nav>
  );
};

export default TopNav;
