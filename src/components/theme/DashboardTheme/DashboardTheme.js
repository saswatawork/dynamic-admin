import React from "react";
import PropTypes from "prop-types";
import { Header, Footer, DashboardMenu } from "components/layouts";
import "./DashboardTheme.scss";

const DashboardTheme = ({ className, children }) => (
  <main className={`dashboard ${className}`}>
    <DashboardMenu className="dashboard-menu-wrapper" />
    <div className="content-wrapper dashboard__item">
      <Header />
      <section className="dashboard-content m-3 p-4">{children}</section>
      <Footer />
    </div>
  </main>
);

DashboardTheme.defaultProps = {
  className: ""
};

DashboardTheme.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default DashboardTheme;
