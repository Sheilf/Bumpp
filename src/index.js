import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { View } from './containers/views'
import Master from './components/views/Master';
import Admin from './components/views/Admin'
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/user" component={View}></Route>
        <Route exact path="/master" component={Master}></Route>
        <Route exact path="/admin" component={Admin}></Route>
    </BrowserRouter>, 
    document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
