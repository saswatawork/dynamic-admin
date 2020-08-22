import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LoginTheme } from "components/theme";
import { StateContext } from "components/utils/stateContext";
import { Redirect } from "react-router-dom";

const NonAuth = ({ children }) => {
  const { isLoggedIn } = useContext(StateContext);

  return isLoggedIn ? (
    <Redirect to="/dashboard" />
  ) : (
    <LoginTheme>{children}</LoginTheme>
  );
};

NonAuth.propTypes = {
  children: PropTypes.element.isRequired
};

export default NonAuth;
