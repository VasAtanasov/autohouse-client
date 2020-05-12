import { combineReducers } from 'redux';
import * as offerReducer from '../../services/offer/offer.reducer';
import * as commonReducer from '../../services/common/common.reducer';
import * as userReducer from '../../services/user/user.reducer';
import * as filterReducer from '../../services/filter/filter.reducer';

const rootReducer = combineReducers({
  ...offerReducer,
  ...commonReducer,
  ...userReducer,
  ...filterReducer,
});

export default rootReducer;
