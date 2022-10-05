import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type initialStateType = typeof initialState;

let initialState = {
    users: [ ] as Array<UserType>,
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2,3,4],
}

export type actionType = followACType | unfollowACType | setUsersACType
    | setCurrentPageACType | setTotalUsersCountACType | toggleIsFetchingACType |toggleIsFollowingProgressACType

export const usersReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}
        }
        case 'SET-USERS': {
            return {...state, users: action.payload.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.payload.currentPage}
        }
        case 'SET-TOTAL-USER-COUNT': {
            return {...state, totalUserCount: action.payload.count}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.payload.isFetching}
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {...state, followingInProgress: action.payload.fetching
                    ?[...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId) }
        }
        default: {
            return state
        }
    }
}


export type followACType = ReturnType<typeof follow>
export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {userID}
    } as const
}

export type unfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {userID}
    } as const
}

export type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {users},
    } as const

}

export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {currentPage},
    } as const

}

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (count: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        payload: {count},
    } as const

}

export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {isFetching},
    } as const

}

export type toggleIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgress>
export const toggleIsFollowingProgress = (fetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        payload: {fetching, userId},
    } as const

}

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });}
}

export const followTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))

        usersAPI.followUser(userId)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            });
    }
}

export const unfollowTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))

        usersAPI.unfollowUser(userId)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            });
    }
}