import {getAuthTC} from "./authReducer";
import {AppThunk} from "./redux-store";

type ActionsType = InitializedSuccessACType

type InitialStateType = typeof initialState
const initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default: {
            return state
        }
    }
}


// ACTIONS

export type InitializedSuccessACType = ReturnType<typeof initializedSuccessAC>
export const initializedSuccessAC = () => {
    return {
        type: "INITIALIZED-SUCCESS"
    } as const
}


//THUNKS

export const initializeAppTC = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthTC())

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccessAC())
        })
}