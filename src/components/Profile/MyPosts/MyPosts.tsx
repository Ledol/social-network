import React, {ChangeEvent, FC} from 'react';
import {Post} from "./Post/Post";
import style from './MyPosts.module.css'
import {MyPostsPropsType} from "./MyPostsContainer";


export const MyPosts: FC<MyPostsPropsType> = (
    {
        posts,
        newPostText,
        updateNewPost,
        addNewPost,
    }) => {

    let postsElement = posts.map(post => {
        return <Post key={post.id}
                     id={post.id}
                     likesCount={post.likesCount}
                     message={post.message}
        />
    })

    const addPostHandler = () => {
        addNewPost()
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPost(e.currentTarget.value)
    }

    return (
        <div className={style.content}>
            <h3> My Posts</h3>
            <div>
                <textarea value={newPostText} onChange={onChangePostHandler}></textarea>
                <button onClick={addPostHandler}>Add Post</button>
                {postsElement}
            </div>
        </div>
    );
};
