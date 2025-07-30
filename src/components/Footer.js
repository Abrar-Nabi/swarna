import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/SWARNA.png";   
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
         {/* Logo with Image */}
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Swarna Trails Logo" className="logo-image" />
              </Link>
            </div>
        <p className="footer-text">© 2024 swarnatrails. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
