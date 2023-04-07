import { useGlobalContext } from "../../context";
import "./Navigation.styles.scss";

const Navigation = () => {
  const { handleNav } = useGlobalContext();

  return (
    <>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav" onClick={handleNav}>
        <ion-icon class="icon-mobile-nav menu" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav close" name="close-outline"></ion-icon>
      </button>
    </>
  );
};

export default Navigation;
