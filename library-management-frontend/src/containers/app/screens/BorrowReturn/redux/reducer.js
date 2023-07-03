import { combineReducers } from 'redux';
import { REQUEST_STATE } from '../../../../../app-configs';
import {
    GET_LIST_BR,
    GET_LIST_BR_FAIL,
    GET_LIST_BR_SUCCESS,
    RESET_GET_LIST_BR,
    CREATE_BR,
    CREATE_BR_SUCCESS,
    CREATE_BR_FAIL,
    RESET_CREATE_BR,
    DELETE_BR,
    DELETE_BR_SUCCESS,
    DELETE_BR_FAIL,
    RESET_DELETE_BR,
    UPDATE_BR,
    UPDATE_BR_SUCCESS,
    UPDATE_BR_FAIL,
    RESET_UPDATE_BR,
} from './action';

const defaultState = {
    state: undefined,
    data: [],
};
export function createBrReducer(state = defaultState, action) {
    switch (action.type) {
        case CREATE_BR().type: {
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        }
        case CREATE_BR_SUCCESS().type: {
            const { data } = action.payload;
            return {
                ...state,
                data: data,
                state: REQUEST_STATE.SUCCESS,
            };
        }
        case CREATE_BR_FAIL().type: {
            const { error } = action.payload;
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
                error: error,
            };
        }
        case RESET_CREATE_BR().type: {
            return {
                ...defaultState,
            };
        }

        default:
            return state;
    }
}
export default function brReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_LIST_BR().type:
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        case GET_LIST_BR_SUCCESS().type:
            return {
                ...state,
                data: action.payload?.data,
                state: REQUEST_STATE.SUCCESS,
            };
        case GET_LIST_BR_FAIL().type:
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
            };
        case RESET_GET_LIST_BR().type:
            return {
                ...defaultState,
            };
        default:
            return state;
    }
}
export function deleteBrReducer(state = defaultState, action) {
    switch (action.type) {
        case DELETE_BR().type:
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        case DELETE_BR_SUCCESS().type:
            return {
                ...state,
                data: action.payload?.data,
                state: REQUEST_STATE.SUCCESS,
            };
        case DELETE_BR_FAIL().type:
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
            };
        case RESET_DELETE_BR().type:
            return {
                ...defaultState,
            };
        default:
            return state;
    }
}
export function updateBrReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_BR().type:
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        case UPDATE_BR_SUCCESS().type:
            return {
                ...state,
                data: action.payload?.data,
                state: REQUEST_STATE.SUCCESS,
            };
        case UPDATE_BR_FAIL().type:
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
            };
        case RESET_UPDATE_BR().type:
            return {
                ...defaultState,
            };
        default:
            return state;
    }
}
