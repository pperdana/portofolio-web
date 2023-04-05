import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button class="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </>
  );
};

export default Navigation;
