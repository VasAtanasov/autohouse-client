import * as types from './offer.types';
import * as offersApi from './offer.api';

export function loadTopOffersSuccess(topOffers) {
  return { type: types.LOAD_TOP_OFFERS, topOffers };
}

export const loadTopOffers = () => async (dispatch) => {
  try {
    const response = await offersApi.loadTopOffers();
    dispatch(loadTopOffersSuccess(response.data));
  } catch (error) {
    throw error;
  }
};
