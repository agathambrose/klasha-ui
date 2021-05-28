// imports
import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import loadable from "@loadable/component";
import Spinner from "react-bootstrap/Spinner";
import { Screen } from "./views/app/Screen";

//views
const Dashboard = loadable(() => import("./views/Dashboard"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center mt-10 items-center"
    />
  ),
});
const Balances = loadable(() => import("./views/Balances"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center mt-10 items-center"
    />
  ),
});
const Customers = loadable(() => import("./views/Customers"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center mt-10 items-center"
    />
  ),
});
const Analytics = loadable(() => import("./views/Analytics"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center mt-10 items-center"
    />
  ),
});
const Settings = loadable(() => import("./views/Settings"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center mt-10 items-center"
    />
  ),
});
const Team = loadable(() => import("./views/Team"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center mt-10 items-center"
    />
  ),
});
const Contact = loadable(() => import("./views/Contact"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center mt-10 items-center"
    />
  ),
});
const Logout = loadable(() => import("./views/Logout"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center items-center"
    />
  ),
});

//return
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router history={history}>
      <Switch>
        <Screen isOpen={isOpen}>
          <Route exact path="/">
            <Dashboard isToggleSideBar={toggle} />
          </Route>
          <Route path="/balances">
            <Balances isToggleSideBar={toggle} />
          </Route>
          <Route path="/customers">
            <Customers isToggleSideBar={toggle} />
          </Route>
          <Route path="/analytics">
            <Analytics isToggleSideBar={toggle} />
          </Route>
          <Route path="/settings">
            <Settings isToggleSideBar={toggle} />
          </Route>
          <Route path="/team">
            <Team isToggleSideBar={toggle} />
          </Route>
          <Route path="/contact">
            <Contact isToggleSideBar={toggle} />
          </Route>
          <Route path="/logout">
            <Logout isToggleSideBar={toggle} />
          </Route>
        </Screen>
      </Switch>
    </Router>
  );
};

export default App;
