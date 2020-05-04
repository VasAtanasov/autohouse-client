import http from '../../utils/requester';
import { handleResponse, handleError } from '../../utils/apiUtils';
import * as constants from '../../utils/constants';

export const loadMakers = async () => {
    const URL = `${constants.BASE_URL}/vehicles/makers`;
    try {
        let response = await http.get(URL);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};
