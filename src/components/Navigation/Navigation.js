import { useGlobalContext } from "../../context";
import "./Navigation.styles.scss";

const Navigation = () => {
  const { handleNav, setToggleNav, toggleNav } = useGlobalContext();

  const handleClick = (e) => {
    console.log(e.view.screen.width);
    // if (e.view.screen.width <= 576) handleNav();

    // get the parent class
    let clickedElement = e.target;
    let classNames = [];

    while (clickedElement) {
      if (clickedElement.classList) {
        classNames.push(clickedElement.classList[0]);
      }
      clickedElement = clickedElement.parentNode;
    }
    classNames.join(", ");

    if (classNames.includes("nav-open")) {
      handleNav();
    }
  };

  return (
    <>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#" onClick={handleClick}>
              Home
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#about" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#skills" onClick={handleClick}>
              Skills
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#projects" onClick={handleClick}>
              Projects
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#contact" onClick={handleClick}>
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
