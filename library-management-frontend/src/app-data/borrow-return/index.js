import { TOKEN_KEY, REQUEST_STATE } from '../../app-configs';
import { POST, GET, DELETE, PUT } from '../../app-data/fetch';

export const apiGetListBr = async () => {
    try {
        const response = await GET('/borrow-returns', {}, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response,
        };
    } catch (error) {
        console.log('error', error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};
export const apiCreateBr = async (body) => {
    try {
        const response = await POST('/borrow-returns', body, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response,
        };
    } catch (error) {
        console.log('error', error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};
export const apiDeleteBr = async (id) => {
    try {
        const response = await DELETE(`/borrow-returns/${id}`, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response,
        };
    } catch (error) {
        console.log('error', error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};
export const apiUpdateBr = async (id, body) => {
    try {
        const response = await PUT(`/borrow-returns/${id}`, body, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response,
        };
    } catch (error) {
        console.log('error', error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};
