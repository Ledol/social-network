import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {facebook: string, website: string, vk: string,twitter: string,instagram: string,youtube: string,github: string,mainLink: string, }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {small: string, large: string}
}


export type initialStateType = typeof initialState;
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'What\'s, wrong?', likesCount: 25},
    ] as Array<PostsType>,
    newPostText: '',
    profile: {
        aboutMe: '',
        contacts: {facebook: '', website: '', vk: '',twitter: '',instagram: '',youtube: '',github: '',mainLink: '', },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {small: '', large: ''},
    },
    status: '' as string
}

export type ProfileActionType = addPostACType| updatePostTextACType | setUserProfileACType |setStatusACType

export const profileReducer = (state: initialStateType = initialState, action: ProfileActionType): initialStateType => {
    switch (action.type) {
        case "ADD-POST" : {
            let newPost: PostsType = {id: new Date().getTime(), message: state.newPostText, likesCount: 0}
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case "UPDATE-NEW-POST" : {
            return {...state, newPostText: action.payload.newPost}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile }
        }
        case "SET-STATUS": {
            return {...state, status: action.payload.status}
        }
        default:
            console.log("Profile page wasn't changed")
            return state
    }
}



export type addPostACType = ReturnType<typeof addPost>
export const addPost = () => {
    return {
        type: "ADD-POST",
    } as const
}
export type updatePostTextACType = ReturnType<typeof updatePostText>
export const updatePostText = (newPost: string) => {
    return {
        type: "UPDATE-NEW-POST",
        payload: {newPost}
    } as const
}
export type setUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        payload: {profile}
    } as const
}
export type setStatusACType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        payload: {status}
    } as const
}


export const getProfileTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data.data));
            });
    }
}
export const getUserStatusTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then((res) => {
                dispatch(setStatus(res.data))
            })
    }
}
export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then((res) => {
                if(res.data.resultCode === 0){
                    dispatch(setStatus(status))
                }
            })
    }
}

