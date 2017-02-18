import {combineReducers} from 'redux';
import addBlog from './add-blog';
import addUseName from "./register";
<<<<<<< HEAD
import getAllBlocks from "./get-blocks";
import getAllUsers from "./login";
=======
import getAllBlogs from "./get-blogs";
>>>>>>> 738d4852405b98ab2c8ac2e4999b4e21f155876b

export default combineReducers({
    addBlog,
    addUseName,
<<<<<<< HEAD
    getAllBlocks,
    getAllUsers
=======
    getAllBlogs
>>>>>>> 738d4852405b98ab2c8ac2e4999b4e21f155876b
});