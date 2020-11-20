import React from "react";
import { FallbackProps } from "react-error-boundary";
import RedirectAs404 from "./routing/RedirectAs404";
import { HttpErrorResponse, HttpStatusCode } from "types";

function ErrorFallbackHandler({ error }: FallbackProps) {
  if (error instanceof HttpErrorResponse) {
    if (
      (error as HttpErrorResponse).response.status === HttpStatusCode.NOT_FOUND
    ) {
      return <RedirectAs404 />;
    }
  }

  return (
    <>
      <h1>ERROR</h1>
      <p>OH, NO!</p>
    </>
  );
}

export default ErrorFallbackHandler;
