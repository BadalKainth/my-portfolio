import image from "../data/images/mikuai.png";
import image2 from "../data/images/BirthdayReminder.png";
import image3 from "../data/images/rockpaper.png";
import image4 from "../data/images/swiptory.png";
import image5 from "../data/images/dappr.png";
import image6 from "../data/images/authenticator.png";
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
            alt="MikuAI.png"
          ></img>
          <div>
            <h1 className={classes.projectHeader}>MIKU AI </h1>
            <p>Tech - HTML5-CSS3, JavaScript, React.js</p>
            <div className={classes.btns}>
              <button className={classes.btn}>
              <a
                  href="https://github.com/BadalKainth/miku.ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  G
                </a>
              </button>
              <button className={classes.btn}>   <a
                  href="https://miku-bm7gkfv4t-badalkainth.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  P
                </a></button>
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
            alt="Rockpaper.png"
          ></img>
          <div>
            <h1 className={classes.projectHeader}>ROCK, PAPER & SCISSORS</h1>
            <p>Tech - HTML5-CSS3, JavaScript, React.js</p>
            <div className={classes.btns}>
              <button className={classes.btn}>
                <a
                  href="https://github.com/BadalKainth/major-module-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  G
                </a>
              </button>
              <button className={classes.btn}>
                <a
                  href="https://major-module-project.vercel.app/"
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
            src={image4}
            alt="swiptory.png"
          ></img>
          <div>
            <h1 className={classes.projectHeader}>SWIPTORY</h1>
            <p>Tech - HTML5-CSS3, JavaScript, React.js</p>
            <div className={classes.btns}>
            <button className={classes.btn}>
                <a
                  href="https://github.com/BadalKainth/SwipTory"
                  target="_blank"
                  rel="noreferrer"
                >
                  G
                </a>
              </button>
              <button className={classes.btn}>
                <a
                  href="https://swip-tory-swart.vercel.app/"
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
            src={image5}
            alt="dappr.png"
          ></img>
          <div>
            <h1 className={classes.projectHeader}>DAPPR UI DESIGN</h1>
            <p>Tech - HTML5-CSS3, JavaScript, React.js</p>
            <div className={classes.btns}>
              <button className={classes.btn}>
                <a
                  href="https://github.com/BadalKainth/Mini-projects-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  G
                </a>
              </button>
              <button className={classes.btn}>
                <a
                  href="https://dappr-miniprojects-2.vercel.app/"
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
            src={image6}
            alt="MenuCard.png"
          ></img>
          <div>
            <h1 className={classes.projectHeader}>MENU CARD</h1>
            <p>Tech - HTML5-CSS3, JavaScript, React.js</p>
            <div className={classes.btns}>
            <button className={classes.btn}>
                <a
                  href="https://github.com/BadalKainth/Auth.frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  G
                </a>
              </button>
              <button className={classes.btn}>
                <a
                  href="https://auth-frontend-phi.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  P
                </a>
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Projects;
