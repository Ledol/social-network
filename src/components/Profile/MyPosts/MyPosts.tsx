import React, {ChangeEvent, FC} from 'react';
import {Post} from "./Post/Post";
import style from './MyPosts.module.css'
import {MyPostsPropsType} from "./MyPostsContainer";



export const MyPosts: FC<MyPostsPropsType> = (
    {
        posts,
        newPostText,
        updateNewPost,
        addPost,
    }) => {

    let postsElement = posts.map(post => {
        return <Post key={post.id}
                     id={post.id}
                     likesCount={post.likesCount}
                     message={post.message}
        />
    })

    const addNewPost = () => {
        addPost()
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPost = e.currentTarget.value
        updateNewPost(newPost)
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
