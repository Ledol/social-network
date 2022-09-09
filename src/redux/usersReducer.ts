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
}

export type actionType = followACType | unfollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType

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

        default: {
            return state
        }
    }
}


export type followACType = ReturnType<typeof followAC>
export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {userID}
    } as const
}

export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {userID}
    } as const
}

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {users},
    } as const

}

export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {currentPage},
    } as const

}

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (count: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        payload: {count},
    } as const

}