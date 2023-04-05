import "./Projects.styles.scss";

import crwnImg from "../../images/projects/crwn.png";
import keeperImg from "../../images/projects/keeper.png";
import todoLsImg from "../../images/projects/todo-list.png";
import drumKitImg from "../../images/projects/drum-kit.png";
import omFoodImg from "../../images/projects/omnifood.png";

import blankImg from "../../images/blank.png";

const Projects = () => {
  return (
    <>
      <section className="section-projects" id="projects">
        <div className="container">
          <span className="subheading">Portfolio</span>
          <h2 className="heading-secondary">
            Each project is unique in its development.
          </h2>
        </div>

        <div className="container grid grid--2-cols grid--center-v">
          {/* <!-- PROJECT 01 --> */}
          <div className="project-text-box">
            <h3 className="heading-tertiary">Crown Clothing</h3>
            <p className="project-description">
              It's a clone of a large e-commerce, which has functionality such
              as authentication, adding payments, store state, store user
              information etc.
            </p>

            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Netlify</span>
              <span className="tag">Sass</span>
              <span className="tag">Firebase</span>
            </div>

            <div className="project-button">
              <a className="btn" href="#">
                <ion-icon class="project-icon" name="logo-github"></ion-icon>
                <span class="icon-text">Code</span>
              </a>

              <a className="btn" href="#">
                <ion-icon class="project-icon" name="radio-outline"></ion-icon>
                <span class="icon-text">Live Site</span>
              </a>
            </div>
          </div>

          <div className="project-img-box">
            <img
              src={crwnImg}
              className="project-img"
              alt="iPhone app
            preferences selection screen"
            />
          </div>

          {/* <!-- PROJECT 02 --> */}
          <div className="project-img-box">
            <img
              src={keeperImg}
              className="project-img"
              alt="iPhone app
            meal approving plan screen"
            />
          </div>
          <div className="project-text-box">
            <h3 className="heading-tertiary">Keeper App</h3>
            <p className="project-description">
              It's clone of google keep, so whenever you have new idea you can
              add new note into you keeper app.
            </p>

            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Netlify</span>
            </div>

            <div className="project-button">
              <a className="btn" href="#">
                <ion-icon class="project-icon" name="logo-github"></ion-icon>
                <span class="icon-text">Code</span>
              </a>

              <a className="btn" href="#">
                <ion-icon class="project-icon" name="radio-outline"></ion-icon>
                <span class="icon-text">Live Site</span>
              </a>
            </div>
          </div>

          {/* <!-- PROJECT 03 --> */}
          <div className="project-text-box">
            <h3 className="heading-tertiary">Todo List App</h3>
            <p className="project-description">
              It's a clone of a large e-commerce, which has functionality such
              as authentication, adding payments, store state, store user
              information etc.
            </p>

            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Netlify</span>
            </div>

            <div className="project-button">
              <a className="btn" href="#">
                <ion-icon class="project-icon" name="logo-github"></ion-icon>
                <span class="icon-text">Code</span>
              </a>

              <a className="btn" href="#">
                <ion-icon class="project-icon" name="radio-outline"></ion-icon>
                <span class="icon-text">Live Site</span>
              </a>
            </div>
          </div>

          <div className="project-img-box">
            <img
              src={todoLsImg}
              className="project-img"
              alt="iPhone app
            preferences selection screen"
            />
          </div>

          {/* <!-- PROJECT 04 --> */}
          <div className="project-img-box">
            <img
              src={drumKitImg}
              className="project-img"
              alt="iPhone app
            meal approving plan screen"
            />
          </div>
          <div className="project-text-box">
            <h3 className="heading-tertiary">Drum Kit</h3>
            <p className="project-description">
              It's clone of google keep, so whenever you have new idea you can
              add new note into you keeper app.
            </p>

            <div className="project-tags">
              <span className="tag">JavaScript</span>
              <span className="tag">Netlify</span>
            </div>

            <div className="project-button">
              <a className="btn" href="#">
                <ion-icon class="project-icon" name="logo-github"></ion-icon>
                <span class="icon-text">Code</span>
              </a>

              <a className="btn" href="#">
                <ion-icon class="project-icon" name="radio-outline"></ion-icon>
                <span class="icon-text">Live Site</span>
              </a>
            </div>
          </div>

          {/* <!-- PROJECT 05 --> */}
          <div className="project-text-box">
            <h3 className="heading-tertiary">Omnifood</h3>
            <p className="project-description">
              It's a clone of a large e-commerce, which has functionality such
              as authentication, adding payments, store state, store user
              information etc.
            </p>

            <div className="project-tags">
              <span className="tag">Vanilla CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Netlify</span>
            </div>

            <div className="project-button">
              <a className="btn" href="#">
                <ion-icon class="project-icon" name="logo-github"></ion-icon>
                <span class="icon-text">Code</span>
              </a>

              <a className="btn" href="#">
                <ion-icon class="project-icon" name="radio-outline"></ion-icon>
                <span class="icon-text">Live Site</span>
              </a>
            </div>
          </div>

          <div className="project-img-box">
            <img
              src={omFoodImg}
              className="project-img"
              alt="iPhone app
            preferences selection screen"
            />
          </div>
        </div>

        <p class="all-projects">
          See more of my projects on{" "}
          <a href="#" class="all-projects-link">
            github
          </a>{" "}
          or{" "}
          <a href="#" class="all-projects-link">
            frontend mentor
          </a>
        </p>
      </section>
    </>
  );
};

export default Projects;
