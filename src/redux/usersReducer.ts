import { Dispatch } from "redux";
import { usersAPI } from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>,
};

export const usersReducer = (
  state: initialStateType = initialState,
  action: actionType
): initialStateType => {
  switch (action.type) {
    case "USERS/FOLLOW": {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload.userID,  {followed: true} )
        /*users: state.users.map((u) =>
          u.id === action.payload.userID ? { ...u, followed: true } : u
        ),*/
      };
    }
    case "USERS/UNFOLLOW": {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload.userID,  {followed: false} )
        /*users: state.users.map((u) =>
          u.id === action.payload.userID ? { ...u, followed: false } : u
        ),*/
      };
    }
    case "USERS/SET-USERS": {
      return { ...state, users: action.payload.users };
    }
    case "USERS/SET-CURRENT-PAGE": {
      return { ...state, currentPage: action.payload.currentPage };
    }
    case "USERS/SET-TOTAL-USER-COUNT": {
      return { ...state, totalUsersCount: action.payload.count };
    }
    case "USERS/TOGGLE-IS-FETCHING": {
      return { ...state, isFetching: action.payload.isFetching };
    }
    case "USERS/TOGGLE-IS-FOLLOWING-PROGRESS": {
      return {
        ...state,
        followingInProgress: action.payload.fetching
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(
              (id) => id !== action.payload.userId
            ),
      };
    }
    default: {
      return state;
    }
  }
};



//ACTIONS
export const follow = (userID: number) => {
  return {
    type: "USERS/FOLLOW",
    payload: { userID },
  } as const;
};
export const unfollow = (userID: number) => {
  return {
    type: "USERS/UNFOLLOW",
    payload: { userID },
  } as const;
};
export const setUsers = (users: Array<UserType>) => {
  return {
    type: "USERS/SET-USERS",
    payload: { users },
  } as const;
};
export const setCurrentPage = (currentPage: number) => {
  return {
    type: "USERS/SET-CURRENT-PAGE",
    payload: { currentPage },
  } as const;
};
export const setTotalUsersCount = (count: number) => {
  return {
    type: "USERS/SET-TOTAL-USER-COUNT",
    payload: { count },
  } as const;
};
export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: "USERS/TOGGLE-IS-FETCHING",
    payload: { isFetching },
  } as const;
};
export const toggleIsFollowingProgress = (fetching: boolean, userId: number) => {
  return {
    type: "USERS/TOGGLE-IS-FOLLOWING-PROGRESS",
    payload: { fetching, userId },
  } as const;
};

//THUNKS
export const getUsersTC = (currentPage: number, pageSize: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize)

      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  };
};
const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let response = await apiMethod(userId)

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
}

export const followTC = (userId: number) => {
  return async (dispatch: Dispatch) => {
    const apiMethod = usersAPI.followUser.bind(usersAPI)
    await followUnfollowFlow(dispatch, userId, apiMethod, follow)
  };
};
export const unfollowTC = (userId: number) => {
  return async (dispatch: Dispatch) => {
    const apiMethod = usersAPI.unfollowUser.bind(usersAPI)
    await followUnfollowFlow(dispatch, userId, apiMethod, unfollow)
  };
};

// Types
export type UserType = {
  'id': number;
  photos: {
    small: string;
    large: string;
  };
  followed: boolean;
  name: string;
  status: string;
  location: {
    city: string;
    country: string;
  };
};
export type initialStateType = typeof initialState;

export type followACType = ReturnType<typeof follow>;
export type unfollowACType = ReturnType<typeof unfollow>;
export type setUsersACType = ReturnType<typeof setUsers>;
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>;
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>;
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>;
export type toggleIsFollowingProgressACType = ReturnType<
    typeof toggleIsFollowingProgress
    >;
export type actionType =
    | followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | toggleIsFollowingProgressACType;