import {
  AnyAction,
  applyMiddleware,
  combineReducers, compose,
  createStore,
} from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { sidebarReducer } from "./sidebarReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./appReducer";

export type AppStateType = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  AnyAction
>;

// @ts-ignore
window.store = store;
