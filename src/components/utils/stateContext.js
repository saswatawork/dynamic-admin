import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const [isLoggedIn, setIsloggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );

  const setLoginStatus = status => {
    setIsloggedIn(status);
  };

  return (
    <StateContext.Provider value={{ isLoggedIn, setLoginStatus }}>
      {children}
    </StateContext.Provider>
  );
};

StateContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { StateContext, StateContextProvider };
