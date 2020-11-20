import React from "react";
import { Redirect, useLocation } from "react-router-dom";

export default function RedirectAs404() {
  const location = useLocation();
  return <Redirect to={{ ...location, state: { is404: true } }} />;
}
