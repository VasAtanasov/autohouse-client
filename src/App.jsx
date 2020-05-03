import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from './components';
import Theme from './Theme';
import { GlobalStyles } from './global';

export const routes = [];

function App() {
    return (
        <Theme>
            <GlobalStyles />
            <Header />
        </Theme>
    );
}

export default App;
