import { EMAIL_CHANGED } from './types';
import { PASSWORD_CHANGED } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChange = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};