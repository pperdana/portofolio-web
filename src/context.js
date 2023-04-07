import React, { useState, useContext } from "react";
import { useInView } from "react-intersection-observer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { ref: myRef, inView: inViewNav } = useInView({
    threshold: 0,
    rootMargin: "-50px",
  });

  const [toggleNav, setToggleNav] = useState(false);

  const handleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <AppContext.Provider
      value={{
        myRef,
        inViewNav,
        toggleNav,
        handleNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
