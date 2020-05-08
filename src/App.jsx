import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header, Footer } from './components';
import { MainContainer, AppContainer } from './containers';
import { HomePage } from './pages';
import Theme from './Theme';
import { GlobalStyles } from './global';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure();

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <AppContainer>
        <ToastContainer />
        <Header />
        <MainContainer>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </MainContainer>
        <Footer />
      </AppContainer>
    </Theme>
  );
}

export default App;
