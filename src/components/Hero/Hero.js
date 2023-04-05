import "./Hero.styles.scss";
import personalPhoto from "../../images/personal-img-cut.png";

const Hero = () => {
  return (
    <section class="section-hero" id="home">
      <div class="hero">
        <div class="hero-text-box">
          <h1 class="heading-primary">
            Hi, I’m Panji | Front End Web Developer
          </h1>
          <p class="hero-description">
            I'm a web developer based in Bandung, Indonesia. My specialized in
            front-end web development.
          </p>
        </div>

        <div class="hero-img-box">
          <picture>
            <img src={personalPhoto} class="hero-img" alt="personal img" />
          </picture>
        </div>

        <div class="social-media-box">
          <ul class="social-media-icon">
            <li>
              <a class="footer-link" href="#">
                <ion-icon
                  class="social-icon md hydrated"
                  name="logo-github"
                  role="img"
                  aria-label="logo github"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon
                  class="social-icon md hydrated"
                  name="logo-instagram"
                  role="img"
                  aria-label="logo instagram"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon
                  class="social-icon md hydrated"
                  name="logo-facebook"
                  role="img"
                  aria-label="logo facebook"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon
                  class="social-icon md hydrated"
                  name="logo-twitter"
                  role="img"
                  aria-label="logo twitter"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
