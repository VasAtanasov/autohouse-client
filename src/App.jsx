import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from './components';
import { MainContainer } from './containers';
import { HomePage } from './pages';
import Theme from './Theme';
import { GlobalStyles } from './global';

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
        </Theme>
    );
}

export default App;
