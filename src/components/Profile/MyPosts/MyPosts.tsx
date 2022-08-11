import React, {ChangeEvent, FC} from 'react';
import {Post} from "./Post/Post";
import style from './MyPosts.module.css'
import {changePostText, ProfilePageType} from "../../../redux/State";

export type MyPostsType = {
    addPost: (postText: string) => void
    changePostText: (newPost: string) => void
}

export const MyPosts: FC<ProfilePageType & MyPostsType> = ({posts, addPost, newPostText}) => {

    let postsElement = posts.map(post => <Post key={post.id} id={post.id} likesCount={post.likesCount}
                                               message={post.message}/>)


    const addNewPost = () => {
        addPost(newPostText);
        changePostText('')
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changePostText(e.currentTarget.value)
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
