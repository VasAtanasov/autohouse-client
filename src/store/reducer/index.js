import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as offerReducer from '../../services/offer/offer.reducer';
import * as commonReducer from '../../services/common/common.reducer';
import * as userReducer from '../../services/user/user.reducer';
import * as filterReducer from '../../services/filter/filter.reducer';
import * as notificationReducer from '../../services/notification/notification.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter', 'statistics', 'makers', 'metadata'],
};

const rootReducer = combineReducers({
  ...offerReducer,
  ...commonReducer,
  ...userReducer,
  ...filterReducer,
  ...notificationReducer,
});

export default persistReducer(persistConfig, rootReducer);
