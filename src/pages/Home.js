import React from "react";
import image from "../data/images/Profile-pic.jpg";

const Home = () => {
  return (
    <body className="home">
      <main>
        <section className="home-section">
          <div>
            <img src={image} alt="Profile-pic" />
          </div>
          <div className="information">
            <h1>
              Hey 🙋🏻, I'm <span>Bukuljeet Kainth.</span> ♂️
              <br></br>A web Developer💻
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="CV-btn">
              <h2>Download CV</h2>
              <button>⇩</button>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Home;
