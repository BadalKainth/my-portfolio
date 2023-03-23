import React from "react";
import image from "../data/images/Omnifood.png";
import image2 from "../data/images/BirthdayReminder.png";
import image3 from "../data/images/uploadImage.png";
import image4 from "../data/images/MenuCard.png";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={classes.sectionProjects}>
      <h1 className={classes.header}>PROJECTS</h1>
      <div className={classes.projectCards}>
        <div className={classes.projectCard}>
          <img
            className={classes.projectImg}
            src={image}
            alt="Omnifood.png"
          ></img>
          <div>
            <h1 className={classes.projectHeader}>OMNIFOOD </h1>
            <p>Tech - HTML5-CSS3, JavaScript, React.js</p>
            <div className={classes.btns}>
              <button className={classes.btn}>G</button>
              <button className={classes.btn}>P</button>
            </div>
          </div>
        </div>
        <div className={classes.projectCard}>
          <img
            className={classes.projectImg}
            src={image2}
            alt="BirthdayReminder.png"
          ></img>
          <div>
            <h1 className={classes.projectHeader}>BIRTHDAY REMINDER</h1>
            <p>Tech - HTML5-CSS3, JavaScript, React.js</p>
            <div className={classes.btns}>
              <button className={classes.btn}>
                <a
                  href="https://github.com/BadalKainth/birthday-reminder"
                  target="_blank"
                  rel="noreferrer"
                >
                  G
                </a>
              </button>
              <button className={classes.btn}>
                <a
                  href="https://birthday-reminder-flax.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  P
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className={classes.projectCard}>
          <img
            className={classes.projectImg}
            src={image3}
            alt="uploadImage.png"
          ></img>
          <div>
            <h1 className={classes.projectHeader}>UPLOAD IMAGE</h1>
            <p>Tech - HTML5-CSS3, JavaScript, React.js</p>
            <div className={classes.btns}>
              <button className={classes.btn}>G</button>
              <button className={classes.btn}>P</button>
            </div>
          </div>
        </div>
        <div className={classes.projectCard}>
          <img
            className={classes.projectImg}
            src={image4}
            alt="MenuCard.png"
          ></img>
          <div>
            <h1 className={classes.projectHeader}>MENU CARD</h1>
            <p>Tech - HTML5-CSS3, JavaScript, React.js</p>
            <div className={classes.btns}>
              <button className={classes.btn}>G</button>
              <button className={classes.btn}>P</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
