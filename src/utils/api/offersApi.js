import http from '../requester';
import { handleResponse, handleError } from './apiUtils';
import * as constants from '../constants';

export const loadTopOffers = async () => {
    try {
        let response = await http.get(constants.TOP_OFFERS_URL);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};
