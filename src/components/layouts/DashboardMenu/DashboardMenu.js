import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import { Folder as FolderMenu } from "react-bytesize-icons";
import Modules from "json/module.json";
import "./DashboardMenu.scss";

const DashboardMenu = ({ className }) => {
  const { url } = useRouteMatch();

  return (
    <section className={`bg-gradient-primary ${className}`}>
      <div className="dashboard-menu-header  dashboard-menu">
        <NavLink className="dashboard-menu__link dashboard-menu__item" to="/">
          Dynamic Admin
        </NavLink>
      </div>
      <nav className="dashboard-menu">
        {Modules.map(module => (
          <NavLink
            key={module.module}
            activeClassName="active"
            className="dashboard-menu__link dashboard-menu__item"
            to={`${url}/${module.module}`}
          >
            <span>{module.name}</span>
            <FolderMenu width="15" height="15" />
          </NavLink>
        ))}
      </nav>
    </section>
  );
};

DashboardMenu.defaultProps = {
  className: ""
};

DashboardMenu.propTypes = {
  className: PropTypes.string
};

export default DashboardMenu;
