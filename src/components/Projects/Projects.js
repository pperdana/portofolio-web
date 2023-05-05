import "./Projects.styles.scss";

import crwnImg from "../../images/projects/crwn.png";
import keeperImg from "../../images/projects/keeper.png";
import todoLsImg from "../../images/projects/todo-list.png";
import drumKitImg from "../../images/projects/drum-kit.png";
import omFoodImg from "../../images/projects/omnifood.png";

import projectsLinks from "../../json/ProjectsLinks";
import socialLinks from "../../json/SocialLinks";

const Projects = () => {
  let project = projectsLinks[0];
  let account = socialLinks[0];
  console.log(project);
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
              Crown Clothing is an a clothing e-commerce web app that allows
              businesses to sell clothing products online. This web include
              features such as a product catalog, shopping cart, payment gateway
              integration, and secure checkout process.
            </p>

            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Netlify</span>
              <span className="tag">Sass</span>
              <span className="tag">Firebase</span>
            </div>

            <div className="project-button">
              <a className="btn" target="_blank" href={project.crown.github}>
                <ion-icon class="project-icon" name="logo-github"></ion-icon>
                <span class="icon-text">Code</span>
              </a>

              <a className="btn" target="_blank" href={project.crown.live}>
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
              Keeper App is clone of google keep. It is an website that helps
              users to capture and organize their thoughts and ideas and store
              important information.
            </p>

            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Netlify</span>
            </div>

            <div className="project-button">
              <a className="btn" target="_blank" href={project.keeper.github}>
                <ion-icon class="project-icon" name="logo-github"></ion-icon>
                <span class="icon-text">Code</span>
              </a>

              <a className="btn" target="_blank" href={project.keeper.live}>
                <ion-icon class="project-icon" name="radio-outline"></ion-icon>
                <span class="icon-text">Live Site</span>
              </a>
            </div>
          </div>

          {/* <!-- PROJECT 03 --> */}
          <div className="project-text-box">
            <h3 className="heading-tertiary">Todo List App</h3>
            <p className="project-description">
              Todo list is a website that allows users to create, manage, and
              track tasks and activities that need to be completed. This website
              help to stay organized, prioritize tasks, and increase
              productivity.
            </p>

            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Netlify</span>
            </div>

            <div className="project-button">
              <a className="btn" target="_blank" href={project.todoList.github}>
                <ion-icon class="project-icon" name="logo-github"></ion-icon>
                <span class="icon-text">Code</span>
              </a>

              <a className="btn" target="_blank" href={project.todoList.live}>
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
              This drum kit web is a web application that simulates the sounds
              of a drum kit. These apps are designed to provide users with a
              realistic and customizable drumming experience.
            </p>

            <div className="project-tags">
              <span className="tag">JavaScript</span>
              <span className="tag">Netlify</span>
            </div>

            <div className="project-button">
              <a className="btn" target="_blank" href={project.drumKit.github}>
                <ion-icon class="project-icon" name="logo-github"></ion-icon>
                <span class="icon-text">Code</span>
              </a>

              <a className="btn" target="_blank" href={project.drumKit.live}>
                <ion-icon class="project-icon" name="radio-outline"></ion-icon>
                <span class="icon-text">Live Site</span>
              </a>
            </div>
          </div>

          {/* <!-- PROJECT 05 --> */}
          <div className="project-text-box">
            <h3 className="heading-tertiary">Omnifood</h3>
            <p className="project-description">
              This Omnifood web is single web page for startup. It's design to
              deliver custom healthy meal plans. This web is beautiful, modern,
              and clean website that look professional and trustworthy company.
            </p>

            <div className="project-tags">
              <span className="tag">Vanilla CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Netlify</span>
            </div>

            <div className="project-button">
              <a className="btn" target="_blank" href={project.ominfood.github}>
                <ion-icon class="project-icon" name="logo-github"></ion-icon>
                <span class="icon-text">Code</span>
              </a>

              <a className="btn" target="_blank" href={project.ominfood.live}>
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
          <a href={account.github} target="_blank" class="all-projects-link">
            github
          </a>{" "}
          and{" "}
          <a
            href={account.frontendMentor}
            target="_blank"
            class="all-projects-link"
          >
            frontend mentor
          </a>
        </p>
      </section>
    </>
  );
};

export default Projects;
