import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function offersReducer(state = initialState.topOffers, action) {
    switch (action.type) {
        case types.LOAD_TOP_OFFERS:
            return action.topOffers;
        default:
            return state;
    }
}
