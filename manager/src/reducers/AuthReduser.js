import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCESS,
    LOGIN_USER_FAIL,

} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',

};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }; //...state created new object and throw it in there (state)
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case LOGIN_USER_SUCESS:
            return { ...state, user: action.payload, error: '' };// clear out the error message
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.' }; // resert password
        default:
            return state;
    }
};