import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Nav } from "./components";
import { About, Contact, Home, Projects, Skills } from "./pages";

function Routes() {
  {
    // Note: Routes are not used in this version of the project, but if you insist on using them, they have already been setup for you, just provide Links to the respective pages
  }
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
