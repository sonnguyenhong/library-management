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
    DELETE_READER_CARD_SUCCESS,
    DELETE_READER_CARD_FAIL,
    DELETE_READER_CARD,
    UPDATE_READER_CARD_FAIL,
    UPDATE_READER_CARD_SUCCESS,
    UPDATE_READER_CARD,
} from './action';
import { apiGetListReader } from 'app-data/reader';
import { apiCreateReader } from 'app-data/reader';
import { apiGetReaderDetail } from 'app-data/reader';
import { apiCreateReaderCard } from 'app-data/reader-card';
import { apiDeleteReaderCard } from 'app-data/reader-card';
import { apiUpdateReaderCard } from 'app-data/reader-card';

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
function* deleteReaderCard({ payload }) {
    try {
        const response = yield call(apiDeleteReaderCard, payload);
        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                DELETE_READER_CARD_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            console.log(response.error);
            yield put(
                DELETE_READER_CARD_FAIL({
                    error: response?.error,
                    message: response?.message,
                }),
            );
        }
    } catch (error) {}
}

function* updateReaderCard(payload) {
    try {
        const {id, body} = payload.payload
        const response = yield call(apiUpdateReaderCard, id, body);
        if (response?.state === REQUEST_STATE.SUCCESS) {
            yield put(
                UPDATE_READER_CARD_SUCCESS({
                    data: response?.data,
                }),
            );
        } else {
            console.log(response.error);
            yield put(
                UPDATE_READER_CARD_FAIL({
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
    yield takeLatest(DELETE_READER_CARD().type, deleteReaderCard);
    yield takeLatest(UPDATE_READER_CARD().type, updateReaderCard);
}
