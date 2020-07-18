import { OfferListPage, CreateUpdateOffer, OfferDetails } from '../pages';

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
  offerDetails: {
    path: '/offer/details/:id',
    component: OfferDetails,
    exact: true,
  },
};
