import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import User from "../User";
import { RouterWithFallback, RedirectAs404 } from "components/routing";
import ErrorBoundary from "components/ErrorBoundary";
import ErrorPage404 from "components/ErrorPage404";

import "./App.css";

export default function App(): JSX.Element {
  return (
    <RouterWithFallback Fallback404Component={ErrorPage404}>
      <div className="links">
        <div>
          <Link to="/user/201/settings">201</Link>
        </div>
        <div>
          <Link to="/user/422/settings">422</Link>
        </div>
        <div>
          <Link to="/user/404/settings">404</Link>
        </div>
        <div>
          <Link to="/user/this/route/does/not/exist">
            This route does not exist
          </Link>
        </div>
      </div>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/">
            Welcome
          </Route>
          <Route path="/user/201">
            <User page={201} key="201" />
          </Route>
          <Route path="/user/404">
            <User page={404} key="404" />
          </Route>
          <Route path="/user/422">
            <User page={422} key="422" />
          </Route>
          <RedirectAs404 />
        </Switch>
      </ErrorBoundary>
    </RouterWithFallback>
  );
}
