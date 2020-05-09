import axios from 'axios';
import { handleResponse, handleError } from './api-utils';

const API_BASE_URL = 'http://localhost:8007/api';
const instance = axios.create({
  baseURL: API_BASE_URL,
});

const http = (() => {
  const call = async (method, url, options = {}) => {
    const defaults = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const onSuccess = options.onSuccess || handleResponse;
    const onError = options.onError || handleError;
    options = Object.assign({}, defaults, options);
    options.method = method;
    options.url = url;
    try {
      const response = await instance(options);
      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

  const get = function (url, options) {
    return call('GET', url, options);
  };

  const post = function (url, options) {
    return call('POST', url, options);
  };

  const put = function (url, options) {
    return call('PUT', url, options);
  };

  const del = function (url, options) {
    return call('DELETE', url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
})();

export default http;
