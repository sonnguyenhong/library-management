//list reader
export function GET_LIST_READER(payload) {
    return {
        type: 'GET_LIST_READER',
        payload,
    };
}
export function GET_LIST_READER_SUCCESS(payload) {
    return {
        type: 'GET_LIST_READER_SUCCESS',
        payload,
    };
}
export function GET_LIST_READER_FAIL(payload) {
    return {
        type: 'GET_LIST_READER_FAIL',
        payload,
    };
}
export function RESET_GET_LIST_READER(payload) {
    return {
        type: 'RESET_GET_LIST_READER',
        payload,
    };
}
/// Create reader
export function CREATE_READER(payload) {
    return {
        type: 'CREATE_READER',
        payload,
    };
}
export function CREATE_READER_SUCCESS(payload) {
    return {
        type: 'CREATE_READER_SUCCESS',
        payload,
    };
}
export function CREATE_READER_FAIL(payload) {
    return {
        type: 'CREATE_READER_FAIL',
        payload,
    };
}
export function RESET_CREATE_READER(payload) {
    return {
        type: 'RESET_CREATE_READER',
        payload,
    };
}

export function GET_READER_DETAIL(payload) {
    return {
        type: 'GET_READER_DETAIL',
        payload,
    };
}
export function GET_READER_DETAIL_SUCCESS(payload) {
    return {
        type: 'GET_READER_DETAIL_SUCCESS',
        payload,
    };
}
export function GET_READER_DETAIL_FAIL(payload) {
    return {
        type: 'GET_READER_DETAIL_FAIL',
        payload,
    };
}
export function RESET_GET_READER_DETAIL(payload) {
    return {
        type: 'RESET_GET_READER_DETAIL',
        payload,
    };
}

/// Create reader card
export function CREATE_READER_CARD(payload) {
    return {
        type: 'CREATE_READER_CARD',
        payload,
    };
}
export function CREATE_READER_CARD_SUCCESS(payload) {
    return {
        type: 'CREATE_READER_CARD_SUCCESS',
        payload,
    };
}
export function CREATE_READER_CARD_FAIL(payload) {
    return {
        type: 'CREATE_READER_CARD_FAIL',
        payload,
    };
}
export function RESET_CREATE_READER_CARD(payload) {
    return {
        type: 'RESET_CREATE_READER_CARD',
        payload,
    };
}
