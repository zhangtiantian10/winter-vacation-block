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

const createStoreWithMiddleware = applyMiddleware(middleAddBlog, middleAddUseName, middleGetAllBlogs)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
            </Route>
            <Route path="writeBlog" component={WriteBlog}/>
            <Route path="register" component={Register}/>
        </Router>
    </Provider>, document.getElementById('app'));
