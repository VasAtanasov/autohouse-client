import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
import { ScrollToTop } from './components';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import {
  loginSetUserLocalStorage,
  loginSetUserAccountLocalStorage,
  setUser,
  seAccount,
} from './services/user/user.actions';

const token = window.localStorage.getItem('token');
if (token && token !== 'undefined' && token !== '') {
  const user = JSON.parse(window.localStorage.getItem('user'));
  if (user) {
    store.dispatch(setUser(user));
    loginSetUserLocalStorage(token, user);
  }
  const account = JSON.parse(window.localStorage.getItem('account'));
  if (account) {
    store.dispatch(seAccount(account));
    loginSetUserAccountLocalStorage(account);
  }
}

render(
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </PersistGate>
  </ReduxProvider>,
  document.getElementById('root')
);
