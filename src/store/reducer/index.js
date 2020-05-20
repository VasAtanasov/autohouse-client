import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as offerReducer from '../../services/offer/offer.reducer';
import * as commonReducer from '../../services/common/common.reducer';
import * as userReducer from '../../services/user/user.reducer';
import * as filterReducer from '../../services/filter/filter.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter', 'statistics', 'makers'],
};

const rootReducer = combineReducers({
  ...offerReducer,
  ...commonReducer,
  ...userReducer,
  ...filterReducer,
});

export default persistReducer(persistConfig, rootReducer);
