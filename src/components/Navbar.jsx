import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="Navbar">
      {/* Logo / Title */}
      <div className="nav-logo">StudentApp</div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>
          Student List
        </NavLink>
        <NavLink to="/add" onClick={() => setOpen(false)}>
          Add Student
        </NavLink>
        <NavLink to="/update" onClick={() => setOpen(false)}>
          Update Student
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
