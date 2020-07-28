import {
  LoginRegister,
  UserSettings,
  OfferFavorites,
  SavedSearches,
  UserOffers,
} from '../pages';

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
  },
  savedSearches: {
    path: '/user/saved-searches',
    component: SavedSearches,
    auth: true,
    exact: true,
  },
  savedInventory: {
    path: '/user/favorites',
    component: OfferFavorites,
    auth: true,
    exact: true,
  },
  myInventory: {
    path: '/user/my-inventory',
    component: UserOffers,
    auth: true,
    exact: true,
  },
};
