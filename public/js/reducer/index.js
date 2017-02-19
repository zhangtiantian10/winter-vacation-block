import {combineReducers} from 'redux';
import addBlog from './add-blog';
import addUseName from "./register";
import getAllUsers from "./login";
import getAllBlogs from "./get-blogs";

export default combineReducers({
    addBlog,
    addUseName,
    getAllUsers,
    getAllBlogs
});