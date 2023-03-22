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
            I am 22 years old passionate boy, who loves to code and put his
            ideas to working content, i am easy to fit in for any kind of
            surrounding since, i have good communication skills.
          </p>
          <br />

          <p>
            I have been learning by myself since 2021 from Youtube and Udemy and
            I am skilled in developing responsive, mobile-friendly websites that
            perform well across all devices.
          </p>

          <br />
          <p>
            My hobbies are listening Music ( It also helps to stay active and
            reduce stress ), Editing & to make YouTube Content ( Channel:{" "}
            <a href="https://www.youtube.com/c/LivewithCloud">SHINIGAMI TV</a>{" "}
            ), Playing Games & to go on Road Trips.
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
            <p className={classes.progText}>70%</p>
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
