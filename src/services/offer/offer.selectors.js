import { createSelector } from 'reselect';

const selectOffer = (state) => state.offer;

export const selectTopOffers = createSelector(
  [selectOffer],
  (offer) => offer.topOffers
);
