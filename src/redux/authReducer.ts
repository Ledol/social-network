import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";

export type DataType = {
    id: null | number
    login: null | string
    email: null | string
}
export type initialStateType = {
    data: DataType
    isAuth: boolean
}

let initialState = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false
}

export type actionType = SetAuthUserDataType

export const authReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state, data: action.payload.data, isAuth: action.payload.isAuth}

        default: {
            return state
        }
    }
}

//ACTION
export type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: DataType, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {data, isAuth}
    } as const
}


//THUNK
export const getAuthTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.data, true))
                }
            });
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuthTC())
                }
            })
    }
}

export const logoutTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData({id: null, login: null, email: null}, false))
                }
            })
    }
}


