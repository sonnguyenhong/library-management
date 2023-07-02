import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import { REQUEST_STATE } from '../../../../../app-configs';

import {
    GET_LIST_READER,
    GET_LIST_READER_FAIL,
    GET_LIST_READER_SUCCESS,
    CREATE_READER,
    CREATE_READER_SUCCESS,
    CREATE_READER_FAIL,
    GET_READER_DETAIL_SUCCESS,
    GET_READER_DETAIL_FAIL,
    GET_READER_DETAIL,
    CREATE_READER_CARD,
    CREATE_READER_CARD_SUCCESS,
    CREATE_READER_CARD_FAIL,
} from './action';
import { apiGetListReader } from 'app-data/reader';
import { apiCreateReader } from 'app-data/reader';
import { apiGetReaderDetail } from 'app-data/reader';
import { apiCreateReaderCard } from 'app-data/reader-card';

function* getListReader({ payload }) {
    try {
        const response = yield call(apiGetListReader, payload);
        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                GET_LIST_READER_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            yield put(
                GET_LIST_READER_FAIL({
                    error: response?.error,
                }),
            );
        }
    } catch (error) {}
}
function* createReader({ payload }) {
    try {
        const response = yield call(apiCreateReader, payload);
        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                CREATE_READER_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            console.log(response.error);
            yield put(
                CREATE_READER_FAIL({
                    error: response?.error,
                    message: response?.message,
                }),
            );
        }
    } catch (error) {}
}

function* getReaderDetail({ payload }) {
    try {
        const response = yield call(apiGetReaderDetail, payload);

        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                GET_READER_DETAIL_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            console.log(response.error);
            yield put(
                GET_READER_DETAIL_FAIL({
                    error: response?.error,
                    message: response?.message,
                }),
            );
        }
    } catch (error) {}
}

function* createReaderCard({ payload }) {
    try {
        const response = yield call(apiCreateReaderCard, payload);
        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                CREATE_READER_CARD_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            console.log(response.error);
            yield put(
                CREATE_READER_CARD_FAIL({
                    error: response?.error,
                    message: response?.message,
                }),
            );
        }
    } catch (error) {}
}

export default function* readerSaga() {
    yield takeLatest(GET_LIST_READER().type, getListReader);
    yield takeLatest(CREATE_READER().type, createReader);
    yield takeLatest(GET_READER_DETAIL().type, getReaderDetail);
    yield takeLatest(CREATE_READER_CARD().type, createReaderCard);
}
