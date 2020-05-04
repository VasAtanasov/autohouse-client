import * as types from './offer.types';
import * as offersApi from '../../utils/api/offersApi';

export function loadTopOffersSuccess(topOffers) {
    return { type: types.LOAD_TOP_OFFERS, topOffers };
}

export function loadTopOffers() {
    return function (dispatch) {
        return offersApi
            .loadTopOffers()
            .then((topOffers) => {
                dispatch(loadTopOffersSuccess(topOffers));
            })
            .catch((error) => {
                throw error;
            });
    };
}
