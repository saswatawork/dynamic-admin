import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { GenericAdd, GenericList, GenericEdit } from "components/pages";
import Modules from "json/module.json";
import "./Dashboard.scss";

const Dashboard = () => {
  const { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <div className="dashboard-module">
          {Modules.map(module => (
            <Link
              key={module.module}
              className="dashboard-module__item"
              to={`${url}/${module.module}`}
            >
              {module.name}
            </Link>
          ))}
        </div>
      </Route>
      <Route exact path={`${path}/:moduleName`}>
        <GenericList />
      </Route>
      <Route exact path={`${path}/:moduleName/add`}>
        <GenericAdd />
      </Route>
      <Route exact path={`${path}/:moduleName/:page`}>
        <GenericList />
      </Route>
      <Route exact path={`${path}/:moduleName/edit/:moduleItemId`}>
        <GenericEdit />
      </Route>
    </Switch>
  );
};

export default Dashboard;
