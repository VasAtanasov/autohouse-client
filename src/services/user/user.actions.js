import * as userApi from './user.api';
import * as types from './user.types';

export const setUser = (user) => {
  return { type: types.SET_USER, user };
};

export const setAccount = (account) => {
  return { type: types.SET_ACCOUNT, account };
};

export const loginSetUserLocalStorage = (token, user) => {
  window.localStorage.setItem('token', token);
  window.localStorage.setItem('user', JSON.stringify(user));
};

export const loginSetUserAccountLocalStorage = (account) => {
  window.localStorage.setItem('account', JSON.stringify(account));
};

export const loginRequestAsync = (data) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  const response = await userApi.login(data);
  const user = response.data.data;
  dispatch({ type: types.SET_USER, user });
  loginSetUserLocalStorage(response.data.data.token, response.data.data);
  if (user.hasAccount) {
    const accountFetchResponse = await userApi.loadUserAccount();
    const account = accountFetchResponse.data.data;
    dispatch({ type: types.SET_ACCOUNT, account });
    loginSetUserAccountLocalStorage(account);
  }
  return response;
};

export const createUpdateAccountAsync = (data) => async (dispatch) => {
  let response;
  switch (data.accountType) {
    case 'DEALER':
      response = await userApi.createUpdateDealerAccount(data);
      break;
    case 'PRIVATE':
      response = await userApi.createUpdatePrivateAccount(data);
      break;
    default:
      return;
  }
  if (response) {
    const account = response.data.data;
    const user = JSON.parse(window.localStorage.getItem('user'));
    window.localStorage.setItem(
      'user',
      JSON.stringify({
        ...user,
        hasAccount: true,
      })
    );
    loginSetUserAccountLocalStorage(account);
    dispatch(setAccount(account));
  }
  return response;
};

export const changePasswordAsync = (data) => async (dispatch) => {
  const response = await userApi.changePassword(data);
  if (response.status === 200) {
    const user = JSON.parse(window.localStorage.getItem('user'));
    loginRequestAsync({
      username: user.username,
      password: data.newPassword,
    });
    console.log(user);
  }
};

export const registerRequestAsync = (data) => async (dispatch) => {
  const response = await userApi.register(data);
  console.log(response);
  return response;
};

export const logoutUnsetUserLocalStorage = () => {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('user');
  window.localStorage.removeItem('account');
};

export const logout = () => (dispatch) => {
  logoutUnsetUserLocalStorage();
  dispatch({
    type: types.LOGOUT,
  });
};
