import React from 'react';
import './Footer.css';
import sasLogo from "../Assets/SAS Logo.jpg";
import northLogo from "../Assets/SASA North logo.jpeg";
import scotSwim from "../Assets/Scottish swimming 1.png";

const Footer = () => {
    return (
        <footer>
           < div className="footer-container">
           <img src={sasLogo} alt="Welcome to Stonehaven Amateur Swimming Club" height={50}/>	
            <img src={scotSwim} alt="Welcome to Stonehaven Amateur Swimming Club" height={50}/>
            <img src={northLogo} alt="Welcome to Stonehaven Amateur Swimming Club" height={60}/>
            </div>
            < div className="footer-container">

            <p>&copy; 2024 Stonehaven Amateur Swimming Club</p>
            </div>
        </footer>
    );
};

export default Footer;