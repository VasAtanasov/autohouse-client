import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Header, MainContainer } from './components';
import Theme from './Theme';
import GlobalStyles from './utils/styles/global';

export const routes = [
    {
        path: '/home',
        component: Home,
        name: 'Home'
    }
];

function App() {
    return (
        <Theme>
            <GlobalStyles />
            <Header />
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
            {/* <div style={{ height: '100vh' }}></div> */}
        </Theme>
    );
}

export default App;
