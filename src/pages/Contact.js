import React from "react";
import classes from "./Contact.module.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faUserGraduate,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const infos = [
    {
      icon: <FontAwesomeIcon icon={faLocationDot} />,
      name: "Location",
      value: "New Delhi, India.",
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      name: "Mobile Number",
      value: "+91 9990168797",
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      name: "Email",
      value: "badalkainth06@gmail.com",
    },
    {
      icon: <FontAwesomeIcon icon={faUserGraduate} />,
      name: "Education",
      value: "University of Delhi.",
    },
    {
      icon: <FontAwesomeIcon icon={faComments} />,
      name: "Languages",
      value: "Hindi, English, Punjabi.",
    },
  ];
  const links = [
    {
      name: "LinkdIn",
      to: "https://www.linkedin.com/in/bukuljeet-kainth",
    },
    {
      name: "GitHub",
      to: "https://github.com/BadalKainth",
    },
    {
      name: "Youtube",
      to: "https://www.youtube.com/c/LivewithCloud",
    },
    {
      name: "Twitter",
      to: "/twitter",
    },
  ];

  return (
    <>
      <section className={classes.contactSection}>
        <h1 className={classes.header}>
          CONTACT
          <span
            style={{
              color: "rgb(95, 15, 68)",
            }}
          >
            &nbsp;ME
          </span>
        </h1>
        <div className={classes.mainCard}>
          <div className={classes.contactCard}>
            <div className={classes.leftSide}>
              <div className={classes.iconList}>
                {infos.map((info) => (
                  <span>{info.icon}</span>
                ))}
              </div>
              <div className={classes.contactInfoLeft}>
                {infos.map((info) => (
                  <span>{info.name}</span>
                ))}
              </div>
            </div>
            <div className={classes.contactInfoRight}>
              {infos.map((info) => (
                <span>: {info.value}</span>
              ))}
            </div>
          </div>
          <br />
          <div>
            <ul className={classes.contactBar}>
              {links.map((link) => (
                <li className={classes.contactIcons}>
                  <Link to={link.to}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
