import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header, Footer, PrivateRoute } from './components';
import { MainContainer, AppContainer } from './containers';
import { Peugeot404 } from './pages';
import Theme from './Theme';
import { GlobalStyles } from './global';
import { ToastContainer } from 'react-toastify';
import { routes } from './routes';
import adminRoutes from './routes/admin';

console.log(routes, adminRoutes);

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeButton={false}
      />
      <Theme>
        <GlobalStyles />
        <Switch>
          {Object.values(adminRoutes).map((route, index) => (
            <PrivateRoute
              {...route}
              key={index}
              path={
                typeof route.path === 'function' ? route.path() : route.path
              }
            />
          ))}
          <Route
            render={() => (
              <AppContainer>
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
                            typeof route.path === 'function'
                              ? route.path()
                              : route.path
                          }
                        />
                      ) : (
                        <Route
                          {...route}
                          key={index}
                          path={
                            typeof route.path === 'function'
                              ? route.path()
                              : route.path
                          }
                        />
                      )
                    )}
                    <Route component={Peugeot404} />
                  </Switch>
                </MainContainer>
                <Footer />
              </AppContainer>
            )}
          />
        </Switch>
      </Theme>
    </React.Fragment>
  );
};

export default App;
