import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { Spin } from "antd";
import PrivateRoute from "../../router/PrivateRoute";
import PublicRoute from "../../router/PublicRoute";
import { authenticationRoutes } from "../../router/index";

function AppRoute() {
  return (
    <Suspense fallback={<Spin />}>
      {authenticationRoutes.map(
        ({ component: Component, exact = true, path, isPrivate, ...rest }) => {
          if (isPrivate) {
            return (
              <PrivateRoute
                key={path}
                component={Component}
                exact={exact}
                path={path}
                {...rest}
              />
            );
          } else
            return (
              <PublicRoute
                checkRedirectHome={true}
                key={path}
                exact={exact}
                path={path}
                component={Component}
                {...rest}
              />
            );
        }
      )}
    </Suspense>
  );
}

export default AppRoute;
