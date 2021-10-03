import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GlobalSpinner from "../../components/global-spinner";
import ProtectedRoute from "../../components/protected-route";
import { USER_TYPES } from "../../config/app.config";
import ROUTES from "../../config/routes.config";
import { useAuth } from "../../state/auth/auth.context";
import ProductDetail from "./product-detail/product-detail";

const CreateProduct = lazy(() => import("./create-product/create-product"));
const ProductList = lazy(() => import("./product-list/product-list"));

const AppViews = () => {
  const { userType } = useAuth();
  return (
    <Suspense fallback={GlobalSpinner}>
      <Switch>
        <Route path={ROUTES.app.base} component={ProductList} exact />

        <Route path={ROUTES.app.product + "/:id"} exact>
          <ProductDetail />
        </Route>

        <Route path={ROUTES.app.profile} exact>
          <h1>Profile page</h1>
        </Route>
        <ProtectedRoute
          path={ROUTES.app.createProduct}
          component={CreateProduct}
          exact
          condition={true}
        />
        <Route path={ROUTES.auth.base}>
          <Redirect from={ROUTES.auth.base} to={ROUTES.app.base} />
        </Route>
        <Route path="/*" component={() => <h1>Not Found</h1>} />
      </Switch>
    </Suspense>
  );
};

export default AppViews;
