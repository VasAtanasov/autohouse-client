import * as types from './actionTypes';
import * as offersApi from '../utils/api/offersApi';

export function loadAuthorsSuccess(topOffers) {
    return { type: types.LOAD_TOP_OFFERS, topOffers };
}

export function loadTopOffers() {
    return function(dispatch) {
        return offersApi
            .loadTopOffers()
            .then(topOffers => {
                dispatch(loadAuthorsSuccess(topOffers));
            })
            .catch(error => {
                throw error;
            });
    };
}
