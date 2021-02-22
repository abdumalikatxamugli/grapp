import { AUTH_LOGIN_BEGIN, AUTH_LOGIN_ERROR, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from '../constants';

const authLoginBegin = () => {
    return {
        type: AUTH_LOGIN_BEGIN
    }
}
const authLoginSuccess = (user) => {
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: { user }
    }
}
const authLoginError = (error) => {
    return {
        type: AUTH_LOGIN_ERROR,
        payload: { error }
    }
}
const authLogout = () => {
    return {
        type: AUTH_LOGOUT
    }
}
export { authLoginBegin, authLoginSuccess, authLoginError, authLogout }