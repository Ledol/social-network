import { getAuthTC } from "./authReducer";
import { AppThunk } from "./redux-store";




const initialState = {
  initialized: false,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case "APP/INITIALIZED-SUCCESS":
      return { ...state, initialized: true };
    default: {
      return state;
    }
  }
};

// ACTIONS
export const initializedSuccessAC = () => {
  return {
    type: "APP/INITIALIZED-SUCCESS",
  } as const;
};

//THUNKS
export const initializeAppTC = (): AppThunk => async (dispatch) => {
  let promise = dispatch(getAuthTC());

  await Promise.all([promise])
    dispatch(initializedSuccessAC());
};

// Types
type InitialStateType = typeof initialState;

export type InitializedSuccessACType = ReturnType<typeof initializedSuccessAC>;
type ActionsType = InitializedSuccessACType;