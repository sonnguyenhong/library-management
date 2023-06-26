import { call, put, takeLatest} from "@redux-saga/core/effects";
import { TOKEN_KEY } from "app-configs";
import { REQUEST_STATE } from "app-configs";
import { apiLogin, apiProfile } from "../../app-data/auth";
import { LOGIN_SUCCESS } from "../../redux/actions/user";
import { LOGIN_FAIL } from "../../redux/actions/user";
import { LOGIN } from "../../redux/actions/user";

function* handleLogin({ payload }) {
  try {
    const response = yield call(apiLogin, payload);
    if (response.state === REQUEST_STATE.SUCCESS) {
      localStorage.setItem(TOKEN_KEY, response.data.accessToken);
      const profile = yield call(apiProfile);
      yield put(LOGIN_SUCCESS(profile.data));
    } else {
      yield put(LOGIN_FAIL());
    }
  } catch (error) {
    console.log("error: ", error);
  }
}

export default function* userSaga() {
  yield takeLatest(LOGIN().type, handleLogin);
}
