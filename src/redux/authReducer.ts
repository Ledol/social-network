import { Dispatch } from "redux";
import { authAPI } from "../api/api";
import { AppThunk } from "./redux-store";
import { stopSubmit } from "redux-form";

let initialState = {
  data: {
    id: null,
    login: null,
    email: null,
  },
  isAuth: false,
};


export const authReducer = (
  state: initialStateType = initialState,
  action: actionType
): initialStateType => {
  switch (action.type) {
    case "AUTH/SET_USER_DATA":
      return {
        ...state,
        data: action.payload.data,
        isAuth: action.payload.isAuth,
      };

    default: {
      return state;
    }
  }
};

//ACTION
export const setAuthUserData = (data: DataType, isAuth: boolean) => {
  return {
    type: "AUTH/SET_USER_DATA",
    payload: { data, isAuth },
  } as const;
};

//THUNK
export const getAuthTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.getAuth()
      if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(res.data.data, true));
      }
    }

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
      if (response.data.resultCode === 0) {
        await dispatch(getAuthTC());
      } else {
        let errorMessage =
            response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: errorMessage }));
      }
  };
};
export const logoutTC = () => {
  return async (dispatch: Dispatch) => {
   let response = await authAPI.logout()

      if (response.data.resultCode === 0) {
        dispatch(
          setAuthUserData({ id: null, login: null, email: null }, false)
        );
      }
  };
};

// Types
export type DataType = {
  id: null | number;
  login: null | string;
  email: null | string;
};
export type initialStateType = {
  data: DataType;
  isAuth: boolean;
};

export type SetAuthUserDataType = ReturnType<typeof setAuthUserData>;
export type actionType = SetAuthUserDataType;