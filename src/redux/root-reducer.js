import { combineReducers } from 'redux';
import offerReducer from './offer/offer.reducer';
import commonReducer from './common/common.reducer';

const rootReducer = combineReducers({
    offer: offerReducer,
    common: commonReducer,
});

export default rootReducer;
