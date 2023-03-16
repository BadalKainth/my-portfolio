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
          <h1>
            Hey 🙋🏻, I'm{" "}
            <span
              style={{
                color: "rgb(95, 15, 68)",
              }}
            >
              Bukuljeet Kainth.
            </span>
            <br></br>A web Developer💻
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.<br></br> It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
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
