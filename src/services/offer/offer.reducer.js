import * as types from './offer.types';
import initialState from '../initial-state';

const INITIAL_STATE = Object.assign({}, initialState.offer, {
  isFetching: false,
  error: null,
});

export const offer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case types.LOAD_TOP_OFFERS_SUCCESS:
      return {
        ...state,
        topOffers: action.topOffers,
      };
    default:
      return state;
  }
};
