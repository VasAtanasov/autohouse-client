import http from '../../utils/requester';
import { handleResponse, handleError } from '../../utils/api-utils';
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

export const loadStatistic = async () => {
  const URL = `${constants.BASE_URL}/vehicles/offers/statistics`;
  try {
    let response = await http.get(URL);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
