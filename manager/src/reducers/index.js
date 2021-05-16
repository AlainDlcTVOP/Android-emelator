import { combineReducers } from 'redux';
import AuthReducer from './AuthReduser';
export default combineReducers({
    auth: AuthReducer
});