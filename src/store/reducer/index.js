import { combineReducers } from 'redux';
import * as offerReducer from '../../services/offer/offer.reducer';
import * as commonReducer from '../../services/common/common.reducer';

const rootReducer = combineReducers({
  ...offerReducer,
  ...commonReducer,
});

export default rootReducer;
