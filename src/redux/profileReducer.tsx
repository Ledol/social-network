import {DispatchType, PostsType, ProfilePageType} from "./Store";

export const profileReducer = (state: ProfilePageType, action: DispatchType) => {
    switch (action.type) {
        case "ADD-POST" : {
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: action.payload.newPostText,
                likesCount: 0}
            state.posts.push(newPost)
            /*state._onChange()*/
            return state
        }
        case "CHANGE-POST-TEXT" : {
            state.newPostText = action.payload.newPost
            return state

        }    // Update new post text
        default:
            console.log("Profile page wasn't changed")
            return state
    }
}

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        payload: {newPostText}
    }as const
}
export type changePostTextACType = ReturnType<typeof changePostTextAC>
export const changePostTextAC = (newPost: string) => {
    return {
        type: "CHANGE-POST-TEXT",
        payload: {newPost}
    }as const
}