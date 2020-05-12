import { createSelector } from 'reselect';

const selectOffer = (state) => state.offer;

export const selectTopOffers = createSelector(
  [selectOffer],
  (offer) => offer.topOffers
);

export const selectIsTopOffersLoaded = createSelector(
  [selectOffer],
  (offer) => !offer.isFetching
);

export const selectPage = createSelector([selectOffer], (offer) => offer.page);
