import * as types from './offer.types';
import initialState from '../initial-state';

const INITIAL_STATE = Object.assign({}, initialState.offer, {
  isFetching: true,
  error: null,
});

export const offer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case types.OFFER_SEARCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case types.OFFER_SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        page: action.page,
      };
    case types.OFFER_SEARCH_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case types.LOAD_TOP_OFFERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case types.LOAD_TOP_OFFERS_SUCCESS:
      return {
        ...state,
        topOffers: action.topOffers,
        isFetching: false,
      };
    case types.LOAD_TOP_OFFERS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};
