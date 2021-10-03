import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ROUTES from "../config/routes.config";

import { useAuth } from "../state/auth/auth.context";
import { Suspense } from "react";
import GlobalSpinner from "../components/global-spinner";

const AuthLayout = lazy(() => import("../layouts/auth-layout/auth-layout"));
const AppLayout = lazy(() => import("../layouts/app-layout/app-layout"));

const Views = () => {
  const { accessToken } = useAuth();
  return (
    <Suspense fallback={<GlobalSpinner />}>
      <Switch>
        {!accessToken ? (
          <Route path={ROUTES.auth.base} component={AuthLayout} />
        ) : (
          <Route path={ROUTES.app.base} component={AppLayout} />
        )}
        <Redirect to={ROUTES.auth.login} />
      </Switch>
    </Suspense>
  );
};

export default Views;
