import React, {ChangeEvent, FC} from 'react';
import {Post} from "./Post/Post";
import style from './MyPosts.module.css'
import {DispatchType, ProfilePageType} from "../../../redux/Store";
import {addPostAC, changePostTextAC} from "../../../redux/profileReducer";

export type MyPostsType = {
    dispatch: (action: DispatchType) => void

}

export const MyPosts: FC<ProfilePageType & MyPostsType> = ({posts, newPostText,dispatch}) => {

    let postsElement = posts.map(post => <Post key={post.id} id={post.id} likesCount={post.likesCount}
                                               message={post.message}/>)


    const addNewPost = () => {
        dispatch(addPostAC(newPostText))
        dispatch(changePostTextAC(''))
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changePostTextAC(e.currentTarget.value))
    }


    return (
        <div className={style.content}>
            <h3> My Posts</h3>
            <div>
                <textarea value={newPostText} onChange={onChangePostHandler}></textarea>
                <button onClick={addNewPost}>Add Post</button>
                {postsElement}
            </div>
        </div>
    );
};
