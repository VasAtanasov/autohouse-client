import http from '../../utils/requester';

const contentTypeV1 = {
  'Content-Type': 'application/bg.autohouse.api-v1+json',
};

export const loginOrRegister = (username) => {
  return http.post('/auth/login-or-register', {
    data: username,
    headers: {
      ...contentTypeV1,
    },
  });
};

export const login = (data) => {
  return http.post('/auth/login', {
    data,
    headers: {
      ...contentTypeV1,
    },
  });
};

export const register = (data) => {
  return http.post('/auth/register', {
    data,
    headers: {
      ...contentTypeV1,
    },
  });
};
