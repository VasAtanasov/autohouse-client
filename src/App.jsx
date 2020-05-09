import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header, Footer } from './components';
import { MainContainer, AppContainer } from './containers';
import { HomePage } from './pages';
import Theme from './Theme';
import { GlobalStyles } from './global';
import { ToastContainer, toast } from 'react-toastify';

toast.configure();

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <AppContainer>
        <ToastContainer position="top-center" />
        <Header />
        <MainContainer>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={HomePage} />
          </Switch>
        </MainContainer>
        <Footer />
      </AppContainer>
    </Theme>
  );
}

export default App;
