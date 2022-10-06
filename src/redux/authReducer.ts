import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type DataType = {
    id: null|number
    login: null|string
    email: null|string
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

export type actionType = setAuthUserDataType

export const authReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {...state, data: action.payload.data, isAuth: true}
        }
        default: {
            return state
        }
    }
}


export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: DataType) => {
    return {
        type: 'SET_USER_DATA',
        payload: {data}
    } as const
}

export const getAuthTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.data))
                }
            });
    }
}

