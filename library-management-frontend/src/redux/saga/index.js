import { all, takeLatest } from "redux-saga/effects";
import userSaga from "../saga/userSaga";
import bookSaga from "../../containers/app/screens/ManageBook/redux/saga";
import borrowReturnSaga from "containers/app/screens/BorrowReturn/redux/saga";
import readerSaga from "containers/app/screens/Reader/redux/saga";

export default function* () {
  yield all([userSaga(), bookSaga(), borrowReturnSaga(), readerSaga()]);
}
