import React, { useState } from 'react';
import './TopNav.css'; // Make sure to create TopNav.css for styling
import SASC_logo1 from '../Assets/SASC_logo1 - Edited 1.png';
import { Link } from 'react-router-dom';


const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-nav">
      <div className='menu-row'>
      <div className="menu-icon" onClick={toggleMenu}>
      {isOpen ? '\u2716' : '\u2630'} {/* Unicode character for hamburger icon */}
        </div>
        <Link to="/"><img src={SASC_logo1} alt="Welcome to Stonehaven Amateur Swimming Club" width={100}/></Link>
      </div>

     
      <ul className={`menu ${isOpen ? "show" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/events">Events / News</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/links">Links</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>
    </nav>
  );
};

export default TopNav;
