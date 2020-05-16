import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

var logger = createLogger({
  collapsed: true,
});

const middleWare = [thunk, reduxImmutableStateInvariant(), logger];

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleWare))
  );
};

const store = configureStore();
const persistor = persistStore(store);

export { store, persistor };
