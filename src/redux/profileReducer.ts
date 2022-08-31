
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type initialStateType = typeof initialState;
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'What\'s, wrong?', likesCount: 25},
    ] as Array<PostsType>,
    newPostText: '',
}

export type ProfileActionType = addPostACType| updatePostTextACType

export const profileReducer = (state: initialStateType = initialState, action: ProfileActionType): initialStateType => {
    switch (action.type) {
        case "ADD-POST" : {
            let newPost: PostsType = {id: new Date().getTime(), message: state.newPostText, likesCount: 0}
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case "UPDATE-NEW-POST" : {
            return {...state, newPostText: action.payload.newPost}
        }
        default:
            console.log("Profile page wasn't changed")
            return state
    }
}



export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}
export type updatePostTextACType = ReturnType<typeof updatePostTextAC>
export const updatePostTextAC = (newPost: string) => {
    return {
        type: "UPDATE-NEW-POST",
        payload: {newPost}
    } as const
}