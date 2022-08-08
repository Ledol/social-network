import React from 'react';
import {Post} from "./Post/Post";
import style from './MyPosts.module.css'

const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'What\'s, wrong?', likesCount: 25},
]

let postsElement = postsData.map(post => <Post key={post.id} likesCount={post.likesCount} message={post.message}/>)


export const MyPosts = () => {
    return (
        <div className={style.content}>
            <h3> My Posts</h3>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                {postsElement}
            </div>
        </div>
    );
};
