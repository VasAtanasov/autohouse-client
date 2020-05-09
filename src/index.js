import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'axios-progress-bar/dist/nprogress.css';
import App from './App';
import configureStore from './store/store';
import { Provider as ReduxProvider } from 'react-redux';
import { ScrollToTop } from './components';

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);
