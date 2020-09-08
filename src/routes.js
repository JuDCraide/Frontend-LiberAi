import React from 'react';
import {Route, BrowserRouter, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TestComponents from './pages/TestComponents';

import { isLogado} from './services/auth'
const Routes = () => {
    return(
        <BrowserRouter>
            <ProtectedRoute component={Home} exact path="/" />
            <Route component={TestComponents} path="/test" />
            <Route component={Login} exact path="/login" />
            <Route component={SignUp} exact path="/cadastro" />
        </BrowserRouter>
    );
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogado() ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default Routes;
