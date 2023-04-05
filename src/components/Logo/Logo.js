import "./Logo.styles.scss";
import logo from "../../images/logo2.png";

const Logo = () => {
  return (
    <a href="#">
      <img class="logo" alt="logo" src={logo} />
    </a>
  );
};

export default Logo;
