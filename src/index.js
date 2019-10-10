import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConnectView, MasterView, AdminView} from './containers/views'
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/connect" component={ConnectView}></Route>
        <Route exact path="/master" component={MasterView}></Route>
        <Route exact path="/dashboard" component={AdminView}></Route>
    </BrowserRouter>, 
    document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
