// imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      className="flex justify-center items-center"
    />
  ),
});
const Balances = loadable(() => import("./views/Balances"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center items-center"
    />
  ),
});
const Customers = loadable(() => import("./views/Customers"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center items-center"
    />
  ),
});
const Analytics = loadable(() => import("./views/Analytics"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center items-center"
    />
  ),
});
const Settings = loadable(() => import("./views/Settings"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center items-center"
    />
  ),
});
const Team = loadable(() => import("./views/Team"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center items-center"
    />
  ),
});
const Contact = loadable(() => import("./views/Contact"), {
  fallback: (
    <Spinner
      style={{ marginTop: "5rem" }}
      animation="grow"
      variant="secondary"
      className="flex justify-center items-center"
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
  return (
    <Router>
      <Switch>
        <Screen>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/balances">
            <Balances />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Screen>
      </Switch>
    </Router>
  );
};

export default App;
