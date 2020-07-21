import { isEmpty } from '../../utils/helpers';
import * as types from './user.types';

export const USER_INITIAL_STATE = {
  error: null,
  isAuthenticated: false,
  details: null,
  account: null,
};

export const user = (state = { ...USER_INITIAL_STATE }, action) => {
  switch (action.type) {
    case types.SET_ACCOUNT:
      return {
        ...state,
        account: action.account,
      };
    case types.SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      };

    case types.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
      };
    case types.LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
      };
    case types.LOGOUT:
      return {
        ...state,
        error: null,
        isAuthenticated: false,
        details: null,
        account: null,
      };
    case types.UPDATE_FAVORITES_LIST:
      return {
        ...state,
        details: {
          ...state.details,
          favorites: action.payload,
        },
      };
    default:
      return state;
  }
};
