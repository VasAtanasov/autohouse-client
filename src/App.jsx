import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header, Footer, PrivateRoute, Spinner } from './components';
import { MainContainer, AppContainer } from './containers';
import Theme from './Theme';
import { GlobalStyles } from './global';
import { ToastContainer } from 'react-toastify';
import { routes } from './routes';

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
            {Object.values(routes).map((route, index) =>
              route.auth ? (
                <PrivateRoute
                  {...route}
                  key={index}
                  path={
                    typeof route.path === 'function' ? route.path() : route.path
                  }
                />
              ) : (
                <Route
                  {...route}
                  key={index}
                  path={
                    typeof route.path === 'function' ? route.path() : route.path
                  }
                />
              )
            )}
          </Switch>
        </MainContainer>
        <Footer />
      </AppContainer>
    </Theme>
  );
}

export default App;
