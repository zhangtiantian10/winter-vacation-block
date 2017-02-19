import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import WriteBlog from "./containers/write-blog";
import reducer from "./reducer/index"
import middleAddBlog from "./middlewares/add-blog";
import Register from "./containers/register";
import middleAddUseName from "./middlewares/register";
import middleGetAllBlogs from "./middlewares/get-blogs";
import Home from './containers/home';
import Login from './containers/login';
import middleGetAllUsers from './middlewares/get-users';
import ReadBlog from './containers/read-blog';

const createStoreWithMiddleware = applyMiddleware(middleAddBlog, middleAddUseName, middleGetAllBlogs, middleGetAllUsers)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
            </Route>
            <Route path="writeBlog" component={WriteBlog}/>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
            <Route path="readBlog" component={ReadBlog}/>
        </Router>
    </Provider>, document.getElementById('app'));
