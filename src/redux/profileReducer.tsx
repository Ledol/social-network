import {DispatchType} from "./Store";

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

export const profileReducer = (state:initialStateType = initialState, action: DispatchType):initialStateType => {
    switch (action.type) {
        case "ADD-POST" : {
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0}
            //state.posts.push(newPost)
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case "CHANGE-POST-TEXT" : {
           return {...state, newPostText: action.payload.newPost}

        }    // Update new post text
        default:
            console.log("Profile page wasn't changed")
            return state
    }
}

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: "ADD-POST",
    }as const
}
export type changePostTextACType = ReturnType<typeof changePostTextAC>
export const changePostTextAC = (newPost: string) => {

    return {
        type: "CHANGE-POST-TEXT",
        payload: {newPost}
    }as const
}