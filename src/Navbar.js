import React from "react";
import "./Navbar.css";
import "./Skills.js";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <a href="/index.js" className="site-title">
            Portfolio
          </a>
        </ul>
        <ul>
          <li>
            <a href="/Skills.js">Skills</a>
          </li>
          <li>
            <a href="/projects.js">Projects</a>
          </li>
          <li>
            <a href="/contact.js">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
