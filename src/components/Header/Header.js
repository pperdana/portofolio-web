import Logo from "../Logo/Logo";
import "./Header.styles.scss";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
