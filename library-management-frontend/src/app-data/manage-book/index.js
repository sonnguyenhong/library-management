import { TOKEN_KEY, REQUEST_STATE } from '../../app-configs';
import { POST } from '../../app-data/fetch';
import { GET } from '../../app-data/fetch';

export const apiGetListBook = async () => {
    try {
        const response = await GET('/documents', {}, { isFullPath: false });
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
export const apiCreateBook = async (body) => {
    try {
        const response = await POST('/documents', body, { isFullPath: false });
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
