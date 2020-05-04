import http from '../../utils/requester';
import { handleResponse, handleError } from '../../utils/apiUtils';
import * as constants from '../../utils/constants';

export const loadTopOffers = async () => {
    try {
        let response = await http.get(constants.TOP_OFFERS_URL);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};
