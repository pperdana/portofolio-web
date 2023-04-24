import "./Hero.styles.scss";
import personalPhoto from "../../images/personal-img-cut.png";
import socialLinks from "../../json/SocialLinks";
import { useGlobalContext } from "../../context";

const Hero = () => {
  const { myRef } = useGlobalContext();

  let account = socialLinks[0];

  return (
    <section ref={myRef} class="section-hero" id="home">
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
              <a class="footer-link" target="blank" href={account.github}>
                <ion-icon
                  class="social-icon md hydrated"
                  name="logo-github"
                  role="img"
                  aria-label="logo github"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a
                class="footer-link"
                target="blank"
                href={account.frontendMentor}
              >
                <ion-icon
                  class="social-icon md hydrated"
                  name="code-slash"
                  role="img"
                  aria-label="code slash"
                ></ion-icon>
              </a>
            </li>

            {/* <li>
              <a class="footer-link" target="blank" href={account.youtube}>
                <ion-icon
                  class="social-icon md hydrated"
                  name="logo-youtube"
                  role="img"
                  aria-label="logo youtube"
                ></ion-icon>
              </a>
            </li> */}

            <li>
              <a class="footer-link" href={`mailto:${account.email}`}>
                <ion-icon
                  class="social-icon md hydrated"
                  name="mail"
                  role="img"
                  aria-label="mail"
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
