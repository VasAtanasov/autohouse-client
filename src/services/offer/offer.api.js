import http from '../../utils/requester';
import { handleResponse, handleError } from '../../utils/apiUtils';
import { BASE_URL } from '../../utils/constants';

export const loadTopOffers = async () => {
  const TOP_OFFERS_URL = `${BASE_URL}/vehicles/offers/top`;
  try {
    let response = await http.get(TOP_OFFERS_URL);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
