import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { REQUEST_STATE } from '../../../../../app-configs';

import {
    CREATE_BR,
    CREATE_BR_SUCCESS,
    CREATE_BR_FAIL,
    DELETE_BR,
    DELETE_BR_SUCCESS,
    DELETE_BR_FAIL,
    GET_LIST_BR,
    GET_LIST_BR_SUCCESS,
    GET_LIST_BR_FAIL,
} from './action';
import { apiGetListBr } from 'app-data/borrow-return';
import { apiCreateBr } from 'app-data/borrow-return';
import { apiDeleteBr } from 'app-data/borrow-return';

function* getListBr({ payload }) {
    try {
        const response = yield call(apiGetListBr, payload);
        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                GET_LIST_BR_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            yield put(
                GET_LIST_BR_FAIL({
                    error: response?.error,
                }),
            );
        }
    } catch (error) {}
}
function* createBr({ payload }) {
    try {
        const response = yield call(apiCreateBr, payload);
        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                CREATE_BR_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            console.log(response.error);
            yield put(
                CREATE_BR_FAIL({
                    error: response?.error,
                }),
            );
        }
    } catch (error) {}
}
function* deleteBr({ payload }) {
    try {
        const response = yield call(apiDeleteBr, payload);
        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                DELETE_BR_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            yield put(DELETE_BR_FAIL());
        }
    } catch (error) {}
}

export default function* borrowReturnSaga() {
    yield takeLatest(GET_LIST_BR().type, getListBr);
    yield takeLatest(CREATE_BR().type, createBr);
    yield takeLeading(DELETE_BR().type, deleteBr);
}
