import axios from 'axios';

const API_BASE_URL = 'http://localhost:8001';
const ACCESS_TOKEN = 'accessToken';

const http = (() => {
    const call = (method, url, options = {}) => {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        if (localStorage.getItem(ACCESS_TOKEN)) {
            headers.append(
                'Authorization',
                'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            );
        }

        const defaults = { headers: headers, baseURL: API_BASE_URL, url };
        options = Object.assign({}, defaults, options);
        options.method = method;
        return axios(options);
    };

    const get = function(url, options) {
        return call('GET', url, options);
    };

    const post = function(url, options) {
        return call('POST', url, options);
    };

    const put = function(url, options) {
        return call('PUT', url, options);
    };

    const del = function(url, options) {
        return call('DELETE', url, options);
    };

    return {
        get,
        post,
        put,
        del
    };
})();

export default http;
