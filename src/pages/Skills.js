import React from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={classes.skillsSection}>
      <h1 className={classes.header}>
        ABOUT <span className={classes.spanMe}>ME</span>
      </h1>
      <div className={classes.aboutSection}>
        <div className={classes.infoAbout}>
          <h3>INFORMATION ABOUT ME</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <br />
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <button className={classes.downloadbtn}>
            <span>Download CV</span>
          </button>
        </div>
        <div className={classes.qualityCards}>
          <div className={classes.qualityCard}>
            <p className={classes.largeText}>FOCUSED </p>
            <p className={classes.smallText}>
              FOCUSED TOWARDS MY WORK AND CAREER.
            </p>
          </div>
          <div className={classes.qualityCard}>
            <p className={classes.largeText}>TEAM-PLAYER </p>
            <p className={classes.smallText}>
              GOOD IN TEAM COMMUNICATION SKILLS.
            </p>
          </div>
          <div className={classes.qualityCard}>
            <p className={classes.largeText}>FAST LEARNER </p>
            <p className={classes.smallText}>
              YOUTUBE AND GITHUB HAS BEEN MY FRIENDS FOR SELF LEARNING.
            </p>
          </div>
          <div className={classes.qualityCard}>
            <p className={classes.largeText}>NO EXCUSES</p>
            <p className={classes.smallText}>
              I AM PASSIONATE ABOUT THE CHALLENGES.
            </p>
          </div>
        </div>
      </div>
      <h1 className={classes.headerSkills}>SKILLS</h1>
      <div className={classes.progressBars}>
        <div className={classes.progressBar}>
          <p class="prog-title">HTML5</p>
          <div className={classes.progressCons}>
            <p className={classes.progText}>90%</p>
            <div className={classes.progress}>
              <span className={classes.html}></span>
            </div>
          </div>
        </div>
        <div className={classes.progressBar}>
          <p class="prog-title">CSS3</p>
          <div className={classes.progressCons}>
            <p className={classes.progText}>80%</p>
            <div className={classes.progress}>
              <span className={classes.css}></span>
            </div>
          </div>
        </div>
        <div className={classes.progressBar}>
          <p class="prog-title">JavaScript</p>
          <div className={classes.progressCons}>
            <p className={classes.progText}>75%</p>
            <div className={classes.progress}>
              <span className={classes.javascript}></span>
            </div>
          </div>
        </div>
        <div className={classes.progressBar}>
          <p class="prog-title">React.js</p>
          <div className={classes.progressCons}>
            <p className={classes.progText}>60%</p>
            <div className={classes.progress}>
              <span className={classes.react}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
