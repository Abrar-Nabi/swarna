import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/SWARNA.png"; // Update with the actual path to your logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo with Image */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Swarna Trails Logo" className="logo-image" />
        </Link>
      </div>

      {/* Hamburger Menu - Hidden when menu is open */}
      <div className={`hamburger ${menuOpen ? "hidden" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Navigation Menu */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        {/* Close Button */}
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </div>


        {/* Call Button */}
        <div className="number-box">
          <a href="tel:+919417171291" className="number" onClick={() => setMenuOpen(false)}>
            <FaPhoneAlt className="icon" />
            +91 941-717-1291
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
