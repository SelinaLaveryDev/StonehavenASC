import React from 'react';
import './Footer.css';
import sasLogo from "../Assets/SAS Logo.jpg";
import northLogo from "../Assets/SASA North logo.jpeg";
import scotSwim from "../Assets/Scottish swimming 1.png";

const Footer = () => {
    return (
        <footer>
           < div className="footer-container">
           <img src={sasLogo} alt="Welcome to Stonehaven Amateur Swimming Club" width={200}/>	

            <p>&copy; 2024 Stonehaven Amateur Swimming Club</p>
            <img src={scotSwim} alt="Welcome to Stonehaven Amateur Swimming Club" width={150}/>
            <img src={northLogo} alt="Welcome to Stonehaven Amateur Swimming Club" width={100}/>
            </div>
        </footer>
    );
};

export default Footer;