import * as types from './offer.types';
import * as offersApi from './offer.api';

export function loadTopOffersStart() {
  return { type: types.LOAD_TOP_OFFERS_START };
}

export function loadTopOffersSuccess(topOffers) {
  return { type: types.LOAD_TOP_OFFERS_SUCCESS, topOffers };
}

export function loadTopOffersFailure(error) {
  return { type: types.LOAD_TOP_OFFERS_FAILURE, error };
}

export const loadTopOffers = () => async (dispatch) => {
  try {
    dispatch(loadTopOffersStart());
    const response = await offersApi.loadTopOffers();
    dispatch(loadTopOffersSuccess(response.data));
  } catch (error) {
    dispatch(loadTopOffersFailure(error));
  }
};
