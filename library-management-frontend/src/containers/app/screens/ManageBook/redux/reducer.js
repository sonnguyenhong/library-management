import { combineReducers } from 'redux';
import { REQUEST_STATE } from '../../../../../app-configs';
import {
    GET_LIST_BOOK,
    GET_LIST_BOOK_SUCCESS,
    GET_LIST_BOOK_FAIL,
    RESET_GET_LIST_BOOK,
    CREATE_BOOK,
    CREATE_BOOK_SUCCESS,
    CREATE_BOOK_FAIL,
    RESET_CREATE_BOOK,
    DELETE_BOOK,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_FAIL,
    RESET_DELETE_BOOK_BOOK,
} from './action';

const defaultState = {
    state: undefined,
    data: [],
};
export function createBookReducer(state = defaultState, action) {
    switch (action.type) {
        case CREATE_BOOK().type: {
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        }
        case CREATE_BOOK_SUCCESS().type: {
            const { data } = action.payload;
            return {
                ...state,
                data: data,
                state: REQUEST_STATE.SUCCESS,
            };
        }
        case CREATE_BOOK_FAIL().type: {
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
            };
        }
        case RESET_CREATE_BOOK().type: {
            return {
                ...defaultState,
            };
        }

        default:
            return state;
    }
}
export default function booksReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_LIST_BOOK().type:
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        case GET_LIST_BOOK_SUCCESS().type:
            return {
                ...state,
                data: action.payload?.data,
                state: REQUEST_STATE.SUCCESS,
            };
        case GET_LIST_BOOK_FAIL().type:
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
            };
        case RESET_GET_LIST_BOOK().type:
            return {
                ...defaultState,
            };
        default:
            return state;
    }
}
export function deleteBooksReducer(state = defaultState, action) {
    switch (action.type) {
        case DELETE_BOOK().type:
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        case DELETE_BOOK_SUCCESS().type:
            return {
                ...state,
                data: action.payload?.data,
                state: REQUEST_STATE.SUCCESS,
            };
        case DELETE_BOOK_FAIL().type:
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
            };
        case RESET_DELETE_BOOK_BOOK().type:
            return {
                ...defaultState,
            };
        default:
            return state;
    }
}
