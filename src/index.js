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
