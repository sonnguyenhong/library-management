import { appDelay } from "../helpers/timer"; // Adjust the path for the timer module
import store from "../redux/index";

export function getRoutesFromContainer(context) {
  let routes = [];
  context.keys().forEach((modulePath) => {
    // Change the variable name to avoid conflict with the path module
    const module = context(modulePath).default;
    routes.push(module);
    if (module.childRoutes) {
      module.childRoutes.forEach((childRoute) => {
        routes.push(childRoute);
      });
    }
  });
  return routes;
}

const authenticationContext = require.context(
  "containers/authentication",
  true,
  /route.js$/
);

export const authenticationRoutes = getRoutesFromContainer(
  authenticationContext
);

export const listAuthenticationRoutes = authenticationRoutes.map((item) => {
  return {
    path: item.path,
    exactContainer: item?.exactContainer ?? true,
  };
});

export const initModules = async (modules = [], container = "app") => {
  await Promise.all(
    modules.map(async (item) => {
      const [reducer, saga] = await Promise.all([
        import(`../containers/${container}/screens/${item.path}/reducer`),
        import(`../containers/${container}/screens/${item.path}/saga`),
      ]);
      store.injectReducer(item.key, reducer.default);
      store.injectSaga(item.key, saga.default);
    })
  );
  // To ensure that modules are injected
  await appDelay(100);
};
