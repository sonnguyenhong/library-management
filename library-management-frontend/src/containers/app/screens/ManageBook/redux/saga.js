import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { REQUEST_STATE } from '../../../../../app-configs';

import {
    CREATE_BOOK,
    CREATE_BOOK_FAIL,
    CREATE_BOOK_SUCCESS,
    DELETE_BOOK,
    DELETE_BOOK_FAIL,
    DELETE_BOOK_SUCCESS,
    GET_LIST_BOOK,
    GET_LIST_BOOK_FAIL,
    GET_LIST_BOOK_SUCCESS,
} from './action';
import { apiGetListBook ,apiCreateBook ,apiDeleteBook } from 'app-data/manage-book';

function* getListBook({ payload }) {
    try {
        const response = yield call(apiGetListBook, payload);

        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                GET_LIST_BOOK_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            yield put(GET_LIST_BOOK_FAIL());
        }
    } catch (error) {}
}
function* createBook({ payload }) {
    try {
        const response = yield call(apiCreateBook, payload);
        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                CREATE_BOOK_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            yield put(CREATE_BOOK_FAIL());
        }
    } catch (error) {}
}
function* deleteBook({ payload }) {
    try {
        const response = yield call(apiDeleteBook, payload);
        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                DELETE_BOOK_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            yield put(DELETE_BOOK_FAIL());
        }
    } catch (error) {}
}

export default function* bookSaga() {
    yield takeLatest(GET_LIST_BOOK().type, getListBook);
    yield takeLatest(CREATE_BOOK().type, createBook);
    yield takeLeading(DELETE_BOOK().type, deleteBook);
}
