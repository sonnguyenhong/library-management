//list books
export function GET_LIST_BR(payload) {
    return {
        type: 'GET_LIST_BR',
        payload,
    };
}
export function GET_LIST_BR_SUCCESS(payload) {
    return {
        type: 'GET_LIST_BR_SUCCESS',
        payload,
    };
}
export function GET_LIST_BR_FAIL(payload) {
    return {
        type: 'GET_LIST_BR_FAIL',
        payload,
    };
}
export function RESET_GET_LIST_BR(payload) {
    return {
        type: 'RESET_GET_LIST_BR',
        payload,
    };
}
/// Create book
export function CREATE_BR(payload) {
    return {
        type: 'CREATE_BR',
        payload,
    };
}
export function CREATE_BR_SUCCESS(payload) {
    return {
        type: 'CREATE_BR_SUCCESS',
        payload,
    };
}
export function CREATE_BR_FAIL(payload) {
    return {
        type: 'CREATE_BR_FAIL',
        payload,
    };
}
export function RESET_CREATE_BR(payload) {
    return {
        type: 'RESET_CREATE_BR',
        payload,
    };
}

export function DELETE_BR(payload) {
    return {
        type: 'DELETE_BR',
        payload,
    };
}
export function DELETE_BR_SUCCESS(payload) {
    return {
        type: 'DELETE_BR_SUCCESS',
        payload,
    };
}
export function DELETE_BR_FAIL(payload) {
    return {
        type: 'DELETE_BR_FAIL',
        payload,
    };
}
export function RESET_DELETE_BR(payload) {
    return {
        type: 'RESET_DELETE_BR',
        payload,
    };
}


export function UPDATE_BR(payload) {
    return {
        type: 'UPDATE_BR',
        payload,
    };
}
export function UPDATE_BR_SUCCESS(payload) {
    return {
        type: 'UPDATE_BR_SUCCESS',
        payload,
    };
}
export function UPDATE_BR_FAIL(payload) {
    return {
        type: 'UPDATE_BR_FAIL',
        payload,
    };
}
export function RESET_UPDATE_BR(payload) {
    return {
        type: 'RESET_UPDATE_BR',
        payload,
    };
}
