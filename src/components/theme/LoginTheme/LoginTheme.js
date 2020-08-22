import React from "react";
import PropTypes from "prop-types";
import "./LoginTheme.scss";

const LoginTheme = ({ className, children }) => (
  <main className={`main-content ${className}`}>
    <div className="card">{children}</div>
  </main>
);

LoginTheme.defaultProps = {
  className: ""
};

LoginTheme.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default LoginTheme;
