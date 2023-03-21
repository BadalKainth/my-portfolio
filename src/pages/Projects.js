import React from "react";
import image from "../data/images/projects.jpg";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={classes.sectionProjects}>
      <h1 className={classes.header}>PROJECTS</h1>
      <div className={classes.projectCards}>
        <div className={classes.projectCard}>
          <img className={classes.projectImg} src={image} alt="projects"></img>
          <div>
            <h1 className={classes.projectHeader}>PROJECT 1</h1>
            <p>this app is built on this blah blah</p>
            <div className={classes.btns}>
              <button className={classes.btn}>G</button>
              <button className={classes.btn}>S</button>
            </div>
          </div>
        </div>
        <div className={classes.projectCard}>
          <img className={classes.projectImg} src={image} alt="projects"></img>
          <div>
            <h1 className={classes.projectHeader}>PROJECT 1</h1>
            <p>this app is built on this blah blah</p>
            <div className={classes.btns}>
              <button className={classes.btn}>G</button>
              <button className={classes.btn}>S</button>
            </div>
          </div>
        </div>
        <div className={classes.projectCard}>
          <img className={classes.projectImg} src={image} alt="projects"></img>
          <div>
            <h1 className={classes.projectHeader}>PROJECT 1</h1>
            <p>this app is built on this blah blah</p>
            <div className={classes.btns}>
              <button className={classes.btn}>G</button>
              <button className={classes.btn}>S</button>
            </div>
          </div>
        </div>
        <div className={classes.projectCard}>
          <img className={classes.projectImg} src={image} alt="projects"></img>
          <div>
            <h1 className={classes.projectHeader}>PROJECT 1</h1>
            <p>this app is built on this blah blah</p>
            <div className={classes.btns}>
              <button className={classes.btn}>G</button>
              <button className={classes.btn}>S</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
