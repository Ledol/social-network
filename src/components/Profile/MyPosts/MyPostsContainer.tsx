import React from 'react';
import {addPost, updatePostText, PostsType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";



/*export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage

                    const addNewPost = () => {
                        store.dispatch(addPostAC())
                    }

                    const onChangePost = (newPost: string) => {
                        let action = changePostTextAC(newPost)
                        store.dispatch(action)
                    }

                    return <MyPosts updateNewPost={onChangePost}
                                    addPost={addNewPost}
                                    posts={state.posts}
                                    newPostText={state.newPostText}/>
                }
            }

        </StoreContext.Consumer>

    )
};*/

type mapStateToPropsType = {
    posts: Array<PostsType>,
    newPostText: string,
}
type mapDispatchToPropsType = {
    updatePostText: (newPost: string) => void
    addPost: () => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        updateNewPost: (newPost: string) => {
            dispatch(updatePostTextAC(newPost))
        },
        addNewPost: () => {
            dispatch(addPostAC())
        }
    }
}*/

export const MyPostsContainer = connect (mapStateToProps, {updatePostText, addPost}) (MyPosts)