import axios from 'axios';

const API_BASE_URL = 'https://autohouse-server.herokuapp.com/api';
// const API_BASE_URL = 'http://localhost:8007/api';
const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const statusCode = error.response ? error.response.status : null;

    if (statusCode === 404) {
      // notifier.error(
      //   'The requested resource does not exist or has been deleted'
      // https://gist.github.com/Godofbrowser
      // );
    }

    if (statusCode === 401) {
      // notifier.error('Please login to access this resource');
    }

    return Promise.reject(error);
  }
);

const http = (() => {
  const call = async (method, url, options = {}) => {
    const defaults = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return instance({
      ...defaults,
      ...options,
      method,
      url,
    });
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
