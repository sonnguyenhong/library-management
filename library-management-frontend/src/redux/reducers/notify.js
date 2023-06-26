import { REQUEST_STATE } from "../../app-configs";

import {
  NOTIFY_LOADING,
  RESET_NOTIFY_STATE,
  NOTIFY_ERROR,
  NOTIFY_SUCCESS,
} from "../../redux/actions/notify";

const defaultState = {
  requestState: null,
  message: null,
};

export default function notifyReducer(state = defaultState, action) {
  switch (action.type) {
    case NOTIFY_LOADING().type: {
      return {
        ...state,
        requestState: REQUEST_STATE.REQUEST,
      };
    }
    case NOTIFY_SUCCESS().type: {
      return {
        ...state,
        requestState: REQUEST_STATE.SUCCESS,
        message: action.payload?.description,
      };
    }
    case NOTIFY_ERROR().type: {
      return {
        ...state,
        requestState: REQUEST_STATE.ERROR,
        message: action.payload?.description,
      };
    }
    case RESET_NOTIFY_STATE().type: {
      return {
        ...state,
        requestState: null,
      };
    }
    default:
      return state;
  }
}
