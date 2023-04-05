import "./Footer.styles.scss";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <img class="logo" alt="logo" src={logo} />
          </a>

          <p class="copyright">
            Copyright &copy;<span class="year">2027</span> by Panji Perdana. All
            rights reserved.
          </p>
        </div>

        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">Bandung, Indonesia</p>
            <p>
              <a class="footer-link" href="mailto:panjiperdana088@gmail.com">
                panjiperdana088@gmail.com
              </a>
            </p>
          </address>
        </div>

        <nav class="nav-col">
          <p class="footer-heading">Links</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a class="footer-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="footer-link" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a class="footer-link" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a class="footer-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Get in touch</p>
          <ul class="social-links">
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
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
