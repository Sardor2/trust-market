import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import ROUTES from "../../config/routes.config";

const Login = React.lazy(() => import("./login"));
const Signup = React.lazy(() => import("./signup"));

const AuthViews = () => {
  return (
    <Switch>
      <Route path={ROUTES.auth.login} exact>
        <Login />
      </Route>
      <Route path={ROUTES.auth.signup} exact>
        <Signup />
      </Route>
      <Route path={ROUTES.auth.base}>
        <Redirect to={ROUTES.auth.signup} exact />
      </Route>
    </Switch>
  );
};

export default AuthViews;
