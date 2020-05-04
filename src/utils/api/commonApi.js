import http from '../requester';
import { handleResponse, handleError } from './apiUtils';
import * as constants from '../constants';

export const loadMakers = async () => {
    const URL = `${constants.BASE_URL}/vehicles/makers`;
    try {
        let response = await http.get(URL);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};
