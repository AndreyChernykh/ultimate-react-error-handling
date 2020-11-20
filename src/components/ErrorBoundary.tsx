import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import ErrorFallbackHandler from "components/ErrorFallbackHandler";
import { useLocation } from "react-router-dom";

export default function ErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallbackHandler}
      resetKeys={[location]}
    >
      {children}
    </ReactErrorBoundary>
  );
}
