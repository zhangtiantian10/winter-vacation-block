import {combineReducers} from 'redux';
import addBlock from './add-block';
import addUseName from "./register";
import getAllBlocks from "./get-blocks";

export default combineReducers({
    addBlock,
    addUseName,
    getAllBlocks
});