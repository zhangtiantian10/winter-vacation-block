import {combineReducers} from 'redux';
import addBlock from './add-block';
import addUseName from "./register";
import getAllBlocks from "./get-blocks";
import getAllUsers from "./login";

export default combineReducers({
    addBlock,
    addUseName,
    getAllBlocks,
    getAllUsers
});