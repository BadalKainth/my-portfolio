import React from "react";
import "./Navbar.css";
import "../Skills";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <Link to="/" className="site-title">
            Portfolio
          </Link>
        </ul>
        <ul>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
