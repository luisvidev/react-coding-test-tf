import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/"  component={HomePage}/>
            <Route exact path="/page-not-found" component={NotFoundPage}/>
            <Redirect to="page-not-found" />
        </Switch>
      </div>
    </Router>
  );
}
