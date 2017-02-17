import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import WriteBlock from "./containers/write-block";
import reducer from "./reducer/index"
import middleAddBlock from "./middlewares/add-block";
import Register from "./containers/register";
import middleAddUseName from "./middlewares/register";
import middleGetAllBlocks from "./middlewares/get-blocks";
import Home from './containers/home';
import Login from './containers/login';
import middleGetAllUsers from './middlewares/get-users';

const createStoreWithMiddleware = applyMiddleware(middleAddBlock, middleAddUseName, middleGetAllBlocks,middleGetAllUsers)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
            </Route>
            <Route path="writeBlock" component={WriteBlock}/>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
        </Router>
    </Provider>, document.getElementById('app'));
