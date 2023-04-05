import "./Skills.styles.scss";

import htmlPng from "../../images/html-5.png";
import cssPng from "../../images/css-3-2.png";
import jsPng from "../../images/javascript2.png";
import reactPng from "../../images/react.png";
import sassPng from "../../images/Sass.png";
import twindPng from "../../images/Tailwind2.png";
import nodePng from "../../images/node.png";
import tsPng from "../../images/typescript.png";

const Skills = () => {
  return (
    <section className="section-skills" id="skills">
      <div className="container">
        <h2 className="heading-skills-in">Tech Stack</h2>
        <p className="skills-description">
          My skills and technologies bring your product to life
        </p>

        <div className="logos">
          <div className="logo">
            <img src={htmlPng} alt="HTML logo" />
            <span>HTML</span>
          </div>
          <div className="logo">
            <img src={cssPng} alt="CSS logo" />
            <span>CSS</span>
          </div>
          <div className="logo">
            <img src={jsPng} alt="JavaScript logo" />
            <span>JavaScript</span>
          </div>
          <div className="logo">
            <img src={reactPng} alt="React logo" />
            <span>React</span>
          </div>
          <div className="logo">
            <img src={sassPng} alt="SASS logo" />
            <span>SASS</span>
          </div>
          <div className="logo">
            <img src={twindPng} alt="Tailwind logo" />
            <span>Tailwind</span>
          </div>
          <div className="logo">
            <img src={nodePng} alt="Node logo" />
            <span>Node</span>
          </div>
          <div className="logo">
            <img src={tsPng} alt="Typescript logo" />
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
