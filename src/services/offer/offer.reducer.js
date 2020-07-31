import * as types from './offer.types';
import initialState from '../initial-state';

const INITIAL_STATE = Object.assign({}, initialState.offer, {
  isFetching: false,
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
    case types.LOAD_OFFER_FOR_EDIT:
      return {
        ...state,
        editCreate: action.payload,
        isFetching: false,
      };
    case types.RESET_OFFER_OBJECT:
      return {
        ...state,
        editCreate: initialState.offer.editCreate,
        isFetching: false,
        error: null,
      };
    default:
      return state;
  }
};
