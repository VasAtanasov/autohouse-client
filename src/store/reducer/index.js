import { combineReducers } from 'redux';
import offerReducer from '../../services/offer/offer.reducer';
import commonReducer from '../../services/common/common.reducer';

const rootReducer = combineReducers({
    offer: offerReducer,
    common: commonReducer,
});

export default rootReducer;
