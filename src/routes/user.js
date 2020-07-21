import { LoginRegister, UserSettings, OfferFavorites } from '../pages';

export default {
  loginRegister: {
    path: '/user/login-register-form',
    component: LoginRegister,
    exact: true,
  },
  account: {
    path: '/user/settings',
    component: UserSettings,
    auth: true,
    // exact: true,
  },
  savedSearches: {
    path: '/user/saved-searches',
    component: null,
    auth: true,
    exact: true,
  },
  savedInventory: {
    path: '/user/saved-inventory',
    component: OfferFavorites,
    auth: true,
    exact: true,
  },
};
