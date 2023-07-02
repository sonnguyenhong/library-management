import { TOKEN_KEY, REQUEST_STATE } from '../../app-configs';
import { POST, GET, DELETE } from '../../app-data/fetch';

export const apiGetListReader = async () => {
    try {
        const response = await GET('/readers', {}, { isFullPath: false });
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
export const apiGetReaderDetail = async (id) => {
    try {
        const response = await GET(`/readers/${id}`, {}, { isFullPath: false });
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
export const apiCreateReader = async (body) => {
    try {
        const response = await POST('/readers', body, { isFullPath: false });
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
