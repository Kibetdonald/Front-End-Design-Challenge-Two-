import React, { useState } from "react";
import "../assets/styles/navbar.scss";
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
      snap
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#">
          Features <FaAngleDown />
        </a>

        <a href="#">Company <FaAngleDown /></a>
        <a href="#">Careers</a>
        <a href="#">About</a>
      </div>
      <a href="#" style={{textDecoration: "none", color: "#000"}}>Login</a>
      <button className="register">Register</button>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
