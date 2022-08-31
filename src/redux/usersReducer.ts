export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    userName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type initialStateType = typeof initialState;

let initialState = {
    users: [] as Array<UserType>
}

export type actionType = followACType | unfollowACType | setUsersACType

export const usersReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.payload.users]}
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