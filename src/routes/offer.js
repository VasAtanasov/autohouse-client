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
  offerEdit: {
    path: '/offer/edit',
    component: CreateUpdateOffer,
    auth: true,
    exact: true,
  },
  offerDetails: {
    path: (id = ':id') => `/offer/details/${id}`,
    component: OfferDetails,
    exact: true,
  },
};
