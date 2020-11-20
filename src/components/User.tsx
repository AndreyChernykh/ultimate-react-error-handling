import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { RedirectAs404 } from "components/routing";
import * as api from "api";

export default function User({ page }: { page: number }): JSX.Element | null {
  const { path } = useRouteMatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .getUser(page)
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, [page]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (error) {
    // We need to throw an error inside of the rendering because
    // error boundaries do not catch errors for:
    // - Event handlers (learn more)
    // - Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
    // - Server side rendering
    // - Errors thrown in the error boundary itself (rather than its children)
    // See: https://reactjs.org/docs/error-boundaries.html
    throw error;
  }

  return (
    <Switch>
      <Route exact path={`${path}/settings`}>
        Success!
      </Route>
      <RedirectAs404 />
    </Switch>
  );
}
