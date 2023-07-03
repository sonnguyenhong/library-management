import { lazy } from "react";
export const loginModule = { key: "login", path: "Login" };

const container = "authentication";

const LoginRoute = {
  path: "/login",
  exact: true,
  isPrivate: false,
  component: lazy(() => import("./index")),
};

export default LoginRoute;