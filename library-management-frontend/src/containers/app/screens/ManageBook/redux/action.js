//list books
export function GET_LIST_BOOK(payload) {
    return {
        type: 'GET_LIST_BOOK',
        payload,
    };
}
export function GET_LIST_BOOK_SUCCESS(payload) {
    return {
        type: 'GET_LIST_BOOK_SUCCESS',
        payload,
    };
}
export function GET_LIST_BOOK_FAIL(payload) {
    return {
        type: 'GET_LIST_BOOK_FAIL',
        payload,
    };
}
export function RESET_GET_LIST_BOOK(payload) {
    return {
        type: 'RESET_GET_LIST_BOOK',
        payload,
    };
}
/// Create book
export function CREATE_BOOK(payload) {
    return {
        type: 'CREATE_BOOK',
        payload,
    };
}
export function CREATE_BOOK_SUCCESS(payload) {
    return {
        type: 'CREATE_BOOK_SUCCESS',
        payload,
    };
}
export function CREATE_BOOK_FAIL(payload) {
    return {
        type: 'CREATE_BOOK_FAIL',
        payload,
    };
}
export function RESET_CREATE_BOOK(payload) {
    return {
        type: 'RESET_CREATE_BOOK',
        payload,
    };
}

export function DELETE_BOOK(payload) {
    return {
        type: 'DELETE_BOOK',
        payload,
    };
}
export function DELETE_BOOK_SUCCESS(payload) {
    return {
        type: 'DELETE_BOOK_SUCCESS',
        payload,
    };
}
export function DELETE_BOOK_FAIL(payload) {
    return {
        type: 'DELETE_BOOK_FAIL',
        payload,
    };
}
export function RESET_DELETE_BOOK_BOOK(payload) {
    return {
        type: 'RESET_DELETE_BOOK_BOOK',
        payload,
    };
}
