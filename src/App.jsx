import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header, Footer } from './components';
import { MainContainer, AppContainer } from './containers';
import { HomePage } from './pages';
import Theme from './Theme';
import { GlobalStyles } from './global';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </MainContainer>
        <Footer />
        <ToastContainer autoClose={3000} />
      </AppContainer>
    </Theme>
  );
}

export default App;
