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

export const verifyRegistration = (username, code) => {
  return http.get(`/auth/register/verify?username=${username}&code=${code}`);
};

export const passwordResetRequest = (username) => {
  return http.post('/auth/password-reset-request', {
    data: { username },
    headers: {
      ...contentTypeV1,
    },
  });
};

export const passwordResetComplete = (username, newPassword, code) => {
  return http.get(
    `/auth/password-reset-complete?username=${username}&password=${newPassword}&code=${code}`
  );
};

export const validateToken = (token) => {
  return http.get(`/auth/token/validate?token=${token}`);
};

export const loadUserAccount = () => {
  return http.get(`/accounts/user-account`);
}