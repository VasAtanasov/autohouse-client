import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header, Footer } from './components';
import { MainContainer } from './containers';
import { HomePage } from './pages';
import Theme from './Theme';
import { GlobalStyles } from './global';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <Theme>
            <GlobalStyles />
            <Header />
            <MainContainer>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </MainContainer>
            <Footer />
            <ToastContainer autoClose={3000} />
        </Theme>
    );
}

export default App;
