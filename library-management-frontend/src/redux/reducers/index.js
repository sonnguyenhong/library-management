import { combineReducers } from "redux";
import userReducer from "./user";
import notifyReducer from "./notify";

const createReducer = (asyncReducers) => {
  return combineReducers({
    user: userReducer,
    notify: notifyReducer,
    ...asyncReducers,
  });
};

export default createReducer;
