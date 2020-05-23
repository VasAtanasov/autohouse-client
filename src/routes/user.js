import { LoginRegister } from '../pages';

export default {
  loginRegister: {
    path: '/user/login-register-form',
    component: LoginRegister,
    exact: true,
  },

  settings: {
    path: '/user/settings',
    component: null,
    auth: true,
    exact: true,
  },

  profile: {
    path: '/user/profile',
    component: null,
    auth: true,
    exact: true,
  },

  savedSearches: {
    path: '/user/saved-searches',
    component: null,
    auth: true,
    exact: true,
  },
};
