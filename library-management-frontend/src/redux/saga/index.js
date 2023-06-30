import { all, takeLatest } from "redux-saga/effects";
import userSaga from "../saga/userSaga";
import bookSaga from "../../containers/app/screens/ManageBook/redux/saga";

export default function* () {
  yield all([userSaga(), bookSaga()]);
}
