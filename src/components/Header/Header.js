import { useState } from "react";

import Logo from "../Logo/Logo";
import "./Header.styles.scss";
import Navigation from "../Navigation/Navigation";
import { useGlobalContext } from "../../context";

const Header = () => {
  const { toggleNav } = useGlobalContext();

  return (
    <header className={`${toggleNav ? "header nav-open" : "header"}`}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
