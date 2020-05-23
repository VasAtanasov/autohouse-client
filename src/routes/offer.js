import OfferListPage from '../pages/offer-list/offer-list.component';

export default {
  list: {
    path: '/list',
    component: OfferListPage,
    exact: true,
  },
  offerCreate: {
    path: '/offer/create',
    component: null,
    auth: true,
    exact: true,
  },
};
