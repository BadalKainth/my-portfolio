import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  const infos = [
    {
      name: "Location",
      value: "New Delhi, India.",
    },
    {
      name: "Mobile Number",
      value: "+91 9990168797",
    },
    {
      name: "Email",
      value: "badalkainth06@gmail.com",
    },
    {
      name: "Education",
      value: "University of Delhi.",
    },
    {
      name: "Languages",
      value: "Hindi, English, Punjabi.",
    },
  ];

  return (
    <>
      <section className={classes.contactSection}>
        <h1>
          CONTACT
          <span
            style={{
              color: "rgb(95, 15, 68)",
            }}
          >
            &nbsp;ME
          </span>
        </h1>
        <div className={classes.contactCard}>
          <div className={classes.contactInfoLeft}>
            {infos.map((info) => (
              <span>{info.name}</span>
            ))}
          </div>
          <div className={classes.contactInfoRight}>
            {infos.map((info) => (
              <span>: {info.value}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
