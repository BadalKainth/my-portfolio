import React from "react";
import image from "../data/images/Profile-pic.jpg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <main>
      <section className={classes.homeSection}>
        <div className="profile-pic">
          <img src={image} alt="Profile-pic" />
        </div>
        <div className={classes.information}>
          <h1 className={classes.header}>
            Hey 🙋🏻, I'm{" "}
            <span
              style={{
                color: "rgb(95, 15, 68)",
              }}
            >
              Bukuljeet Kainth.
            </span>{" "}
            A web Developer💻
          </h1>
          <p>
            As a web developer, I am passionate about creating dynamic and
            visually stunning websites that provide seamless user experiences.
            With a strong background in web development technologies, including
            HTML, CSS, JavaScript, and various frameworks and libraries, I am
            skilled in developing responsive, mobile-friendly websites that
            perform well across all devices.
          </p>
          <br />
          <p>
            Whether working collaboratively with other developers or managing
            projects independently, I am committed to delivering projects on
            time, while maintaining the highest standards of quality. I am
            always looking for new challenges and opportunities to further
            develop my skills and enhance my portfolio.
          </p>
          <button className={classes.downloadbtn}>
            <span>Download CV</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
