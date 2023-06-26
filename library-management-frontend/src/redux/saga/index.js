import { all, takeLatest } from "redux-saga/effects";
import userSaga from "../saga/userSaga";

export default function* () {
  yield all([userSaga()]);
}
