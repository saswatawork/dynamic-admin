import React, { useContext } from "react";
import PropTypes from "prop-types";
import { DashboardTheme } from "components/theme";
import { StateContext } from "components/utils/stateContext";
import { Redirect } from "react-router-dom";

const Auth = ({ children }) => {
  const { isLoggedIn } = useContext(StateContext);
  return isLoggedIn ? (
    <DashboardTheme>{children}</DashboardTheme>
  ) : (
    <Redirect to="/" />
  );
};

Auth.propTypes = {
  children: PropTypes.element.isRequired
};

export default Auth;
