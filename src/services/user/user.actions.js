import * as userApi from './user.api';
import * as types from './user.types';

export const loginSetUserLocalStorage = (token, user) => {
  window.localStorage.setItem('token', token);
  window.localStorage.setItem('user', JSON.stringify(user));
};

export const loginRequestAsync = (data) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  const response = await userApi.login(data);
  dispatch({ type: types.SET_USER, user: response.data.data });
  loginSetUserLocalStorage(response.data.data.token, response.data.data);
  return response;
};

export const registerRequestAsync = (data) => async (dispatch) => {
  try {
    const response = await userApi.register(data);
    console.log(response);
    return response;
  } catch (error) {}
};
