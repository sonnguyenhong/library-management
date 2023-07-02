import { TOKEN_KEY, REQUEST_STATE } from '../../app-configs';
import { POST, GET, DELETE } from '../../app-data/fetch';

export const apiCreateReaderCard = async (body) => {
    try {
        const response = await POST('/reader-cards', body, { isFullPath: false });
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
export const apiDeleteReaderCard = async (id) => {
    try {
        const response = await DELETE(`/reader-cards/${id}`, {}, { isFullPath: false });
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
export const apiUpdateReaderCard = async (body) => {
    try {
        const response = await PUT('/reader-cards', body, { isFullPath: false });
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
