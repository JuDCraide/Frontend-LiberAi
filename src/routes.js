import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import TestComponents from './pages/TestComponents';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} exact path="/" />
            <Route component={TestComponents} path="/test" />
        </BrowserRouter>
    );
}

export default Routes;