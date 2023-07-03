import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { promiseMiddleware } from "@adobe/redux-saga-promise";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./saga";
import createReducer from "./reducers";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
function createSagaInjector(runSaga, rootSaga) {
  const injectedSagas = new Map();

  const isInjected = (key) => injectedSagas.has(key);

  const injectSaga = (key, saga) => {
    if (isInjected(key)) return;
    const task = runSaga(saga);
    injectedSagas.set(key, task);
  };
  injectSaga("root", rootSaga);
  return injectSaga;
}
const store = createStore(
  createReducer(),
  {},
  composeWithDevTools(
    applyMiddleware(promiseMiddleware, sagaMiddleware, logger)
  )
);

store.asyncReducers = {};
store.injectReducer = (key, reducer) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga);
export default store;
