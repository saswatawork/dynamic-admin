import React from "react";
import { StateContextProvider } from "components/utils/stateContext";
import Route from "./route";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const App = () => {
  return (
    <StateContextProvider>
      <Route />
    </StateContextProvider>
  );
};

export default App;
