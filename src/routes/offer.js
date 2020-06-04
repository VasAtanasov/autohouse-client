import { OfferListPage, CreateUpdateOffer } from '../pages';

export default {
  list: {
    path: '/list',
    component: OfferListPage,
    exact: true,
  },
  offerCreate: {
    path: '/offer/create',
    component: CreateUpdateOffer,
    auth: true,
    exact: true,
  },
};
