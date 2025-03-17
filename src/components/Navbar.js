import classes from "./Navbar.module.css";
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
            // eslint-disable-next-line react/jsx-key
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
