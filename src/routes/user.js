import { LoginRegister } from '../pages';

export default {
  loginRegister: {
    path: '/user/login-register-form',
    component: LoginRegister,
    exact: true,
  },

  // signup: {
  //   path: '/user/signup',
  //   component: null,
  //   exact: true,
  // },

  profile: {
    path: '/user/profile',
    component: null,
    auth: true,
    exact: true,
  },
};
