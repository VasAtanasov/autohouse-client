import { combineReducers } from 'redux';
import topOffers from './offerReducers';

const rootReducer = combineReducers({
    topOffers
});

export default rootReducer;
