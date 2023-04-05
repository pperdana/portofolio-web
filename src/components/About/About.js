import "./About.styles.scss";

import idCardImg from "../../images/id-card.png";
import codeImg from "../../images/code2.png";

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="container">
        <span className="subheading">About</span>
        <h2 className="heading-secondary">
          A web developer who is dedicated to their craft
        </h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        {/* <!-- ABOUT 01 --> */}
        <div className="about-text-box">
          <hr className="text-box-line" />
          <p className="about-description">
            I'm a self-taught web developer based out of Bandung, Indonesia. I
            love building apps that solve real-world problems, and that is
            delightful and easy to use. My specialties include Vanilla
            JavaScript, React JS, SCSS, Tailwind, and Styled Components.
          </p>
        </div>

        <div className="about-img-box">
          <img className="about-img" src={idCardImg} alt="id card" />
        </div>

        {/* <!-- ABOUT 02 --> */}
        <div className="about-img-box">
          <img className="about-img" src={codeImg} alt="code" />
        </div>
        <div className="about-text-box">
          <hr className="text-box-line" />
          <p className="about-description">
            I am interested in Front-End Development, Website Optimization,
            Maintenance, and Design to Web Conversion with fully functional
            websites that meet your unique needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
