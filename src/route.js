import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth, NonAuth } from "components/features";
import { Login, Register, Dashboard, NotFound } from "components/pages";

const MainRoute = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <NonAuth>
          <Login />
        </NonAuth>
      </Route>
      <Route path="/register">
        <NonAuth>
          <Register />
        </NonAuth>
      </Route>
      <Route path="/dashboard">
        <Auth>
          <Dashboard />
        </Auth>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default MainRoute;
