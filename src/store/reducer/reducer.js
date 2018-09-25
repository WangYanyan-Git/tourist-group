import {combineReducers} from 'redux';
import trip from './travellibrary/travellibrary';
import userment from './userment/userment';

let redcers=combineReducers({
    trip,
    userment
})
export default redcers;

