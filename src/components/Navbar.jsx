import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/" className="home">Home</Link>
      <Link to="/add" className="addstudent">Add Student</Link>
      <Link to="/update" className="updatestudent">Update Student</Link>
    </nav>
  );
}

export default Navbar;
