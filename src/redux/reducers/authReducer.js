import { AUTH_LOGIN_BEGIN, AUTH_LOGIN_ERROR, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from '../constants';
const initialState = {
    user: '',
    loggedIn: false,
    error: false,
    loading: false
};
const authReducer = (auth = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_BEGIN:
            return {
                ...auth,
                loading: true,
                loggedIn: false,
                error: false
            }
        case AUTH_LOGIN_SUCCESS:
            return {
                ...auth,
                user: action.payload.user,
                loggedIn: true,
                loading: false,
                error: false
            }
        case AUTH_LOGIN_ERROR:
            return {
                ...auth,
                loading: false,
                loggedIn: false,
                error: action.payload.error
            }
        case AUTH_LOGOUT:
            return {
                ...initialState
            }
        default:
            return auth
    }
}
export default authReducer;