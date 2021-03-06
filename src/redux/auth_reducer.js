import {authAPI, usersAPI} from '../api/api'
import {stopSubmit} from 'redux-form'
import {forgetAuthorizedUser, rememberAuthorizedUser, setUserProfile} from "./profile_reducer";

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, data: {userId, email, login, isAuth}
})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
        const data = await usersAPI.getProfile(id)
        await dispatch(setUserProfile(data))
        dispatch(rememberAuthorizedUser())
    }
}

export const logIn = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.logIn(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        dispatch(stopSubmit('login', {_error: response.data.messages[0]}));
    }
}

export const logOut = () => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
        dispatch(forgetAuthorizedUser())
    }
}


export default authReducer;