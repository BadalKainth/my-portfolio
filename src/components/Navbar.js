import React from "react";
import classes from "./Navbar.module.css";
import "../pages/Skills";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Skills",
      to: "/skills",
    },
    {
      name: "Projects",
      to: "/projects",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  return (
    <>
      <nav className={classes.header}>
        <h1 className={classes.title}>Portfolio</h1>
        <ul className={classes.navBar}>
          {links.map((link) => (
            <li className={classes.navItem}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
