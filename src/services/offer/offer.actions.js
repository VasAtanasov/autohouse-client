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

export function searchOffersStart() {
  return { type: types.OFFER_SEARCH_START };
}

export function searchOffersSuccess(page) {
  return { type: types.OFFER_SEARCH_SUCCESS, page };
}

export function searchOffersFailure(error) {
  return { type: types.OFFER_SEARCH_FAILURE, error };
}

export const searchOffers = (filter) => async (dispatch) => {
  try {
    dispatch(searchOffersStart());
    const response = await offersApi.searchOffers(filter);
    dispatch(searchOffersSuccess(response.data.page));
  } catch (error) {
    dispatch(searchOffersFailure(error));
  }
};
