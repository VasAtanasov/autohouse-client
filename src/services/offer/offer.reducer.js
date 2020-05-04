import * as types from './offer.types';
import initialState from '../initial-state';

export default function offersReducer(state = initialState.offer, action) {
    switch (action.type) {
        case types.LOAD_TOP_OFFERS:
            return {
                ...state,
                topOffers: action.topOffers,
            };
        default:
            return state;
    }
}
