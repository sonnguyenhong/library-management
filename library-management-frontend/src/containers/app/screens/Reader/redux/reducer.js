import { combineReducers } from 'redux';
import { REQUEST_STATE } from '../../../../../app-configs';
import {
    GET_LIST_READER,
    GET_LIST_READER_FAIL,
    GET_LIST_READER_SUCCESS,
    RESET_GET_LIST_READER,
    CREATE_READER,
    CREATE_READER_SUCCESS,
    CREATE_READER_FAIL,
    RESET_CREATE_READER,
    DELETE_READER,
    DELETE_READER_SUCCESS,
    DELETE_READER_FAIL,
    RESET_DELETE_READER,
    GET_READER_DETAIL,
    GET_READER_DETAIL_SUCCESS,
    GET_READER_DETAIL_FAIL,
    RESET_GET_READER_DETAIL,
    CREATE_READER_CARD,
    RESET_CREATE_READER_CARD,
    CREATE_READER_CARD_FAIL,
    CREATE_READER_CARD_SUCCESS,
    DELETE_READER_CARD,
    DELETE_READER_CARD_SUCCESS,
    DELETE_READER_CARD_FAIL,
    RESET_DELETE_READER_CARD,
    UPDATE_READER_CARD,
    UPDATE_READER_CARD_SUCCESS,
    UPDATE_READER_CARD_FAIL,
    RESET_UPDATE_READER_CARD,
} from './action';

const defaultState = {
    state: undefined,
    data: [],
};
export function createReaderReducer(state = defaultState, action) {
    switch (action.type) {
        case CREATE_READER().type: {
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        }
        case CREATE_READER_SUCCESS().type: {
            const { data } = action.payload;
            return {
                ...state,
                data: data,
                state: REQUEST_STATE.SUCCESS,
            };
        }
        case CREATE_READER_FAIL().type: {
            const { error } = action.payload;
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
                error: error,
            };
        }
        case RESET_CREATE_READER().type: {
            return {
                ...defaultState,
            };
        }

        default:
            return state;
    }
}
export function getReaderDetailReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_READER_DETAIL().type: {
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        }
        case GET_READER_DETAIL_SUCCESS().type: {
            const { data } = action.payload;
            return {
                ...state,
                data: data,
                state: REQUEST_STATE.SUCCESS,
            };
        }
        case GET_READER_DETAIL_FAIL().type: {
            const { error } = action.payload;
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
                error: error,
            };
        }
        case RESET_GET_READER_DETAIL().type: {
            return {
                ...defaultState,
            };
        }

        default:
            return state;
    }
}
export default function readerReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_LIST_READER().type:
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        case GET_LIST_READER_SUCCESS().type:
            return {
                ...state,
                data: action.payload?.data,
                state: REQUEST_STATE.SUCCESS,
            };
        case GET_LIST_READER_FAIL().type:
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
            };
        case RESET_GET_LIST_READER().type:
            return {
                ...defaultState,
            };
        default:
            return state;
    }
}

/// reader card

export function createReaderCardReducer(state = defaultState, action) {
    switch (action.type) {
        case CREATE_READER_CARD().type: {
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        }
        case CREATE_READER_CARD_SUCCESS().type: {
            const { data } = action.payload;
            return {
                ...state,
                data: data,
                state: REQUEST_STATE.SUCCESS,
            };
        }
        case CREATE_READER_CARD_FAIL().type: {
            const { error } = action.payload;
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
                error: error,
            };
        }
        case RESET_CREATE_READER_CARD().type: {
            return {
                ...defaultState,
            };
        }

        default:
            return state;
    }
}
/// delete Reader card
export function deleteReaderCardReducer(state = defaultState, action) {
    switch (action.type) {
        case DELETE_READER_CARD().type: {
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        }
        case DELETE_READER_CARD_SUCCESS().type: {
            const { data } = action.payload;
            return {
                ...state,
                data: data,
                state: REQUEST_STATE.SUCCESS,
            };
        }
        case DELETE_READER_CARD_FAIL().type: {
            const { error } = action.payload;
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
                error: error,
            };
        }
        case RESET_DELETE_READER_CARD().type: {
            return {
                ...defaultState,
            };
        }

        default:
            return state;
    }
}
export function updateReaderCardReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_READER_CARD().type: {
            return {
                ...state,
                state: REQUEST_STATE.REQUEST,
            };
        }
        case UPDATE_READER_CARD_SUCCESS().type: {
            const { data } = action.payload;
            return {
                ...state,
                data: data,
                state: REQUEST_STATE.SUCCESS,
            };
        }
        case UPDATE_READER_CARD_FAIL().type: {
            const { error } = action.payload;
            return {
                ...state,
                state: REQUEST_STATE.ERROR,
                error: error,
            };
        }
        case RESET_UPDATE_READER_CARD().type: {
            return {
                ...defaultState,
            };
        }

        default:
            return state;
    }
}
