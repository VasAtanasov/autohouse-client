import http from '../../utils/requester';
import { handleResponse, handleError } from '../../utils/apiUtils';
import * as constants from '../../utils/constants';
import NProgress from 'nprogress';

export const loadMakers = async () => {
  const URL = `${constants.BASE_URL}/vehicles/makers`;
  try {
    NProgress.start();
    let response = await http.get(URL);
    NProgress.done();
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
