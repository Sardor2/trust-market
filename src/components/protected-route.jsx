import React from "react";
import { Redirect, Route } from "react-router";
import ROUTES from "../config/routes.config";

const ProtectedRoute = ({ condition, ...routeProps }) => {
  if (!condition) {
    return <Redirect to={ROUTES.app.base} />;
  }
  return <Route {...routeProps}></Route>;
};

export default ProtectedRoute;
