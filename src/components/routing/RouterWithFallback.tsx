import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

interface CustomLocationState {
  is404: boolean;
}

interface Props {
  children: React.ReactNode;
  Fallback404Component: React.ComponentType;
}

function clearHistoryState() {
  // Clear the `.is404` flag without reloading the page
  window.history.replaceState({}, "");
}

export default function RouterWithFallback({
  children,
  Fallback404Component,
}: Props) {
  return (
    <Router>
      <Route
        render={({ location }) => {
          if (location.state && (location.state as CustomLocationState).is404) {
            clearHistoryState();
            return <Fallback404Component />;
          }
          return children;
        }}
      />
    </Router>
  );
}
