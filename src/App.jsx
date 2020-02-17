import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Header, MainContainer, Hero } from './components';
import Theme from './Theme';
import GlobalStyles from './utils/styles/global';

export const routes = [
    {
        path: '/home',
        component: Home,
        name: 'Home'
    }
];
const bgImage = '/images/bg_6.jpg';

function App() {
    return (
        <Theme>
            <GlobalStyles />
            <Header />
            {false && <Hero backgroundImage={bgImage}></Hero>}
            <MainContainer style={{ backgroundColor: 'white' }}>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    {routes.map((routObj, idx) => (
                        <Route
                            exact
                            key={idx}
                            path={routObj.path}
                            component={routObj.component}
                        />
                    ))}
                </Switch>
            </MainContainer>
        </Theme>
    );
}

export default App;
