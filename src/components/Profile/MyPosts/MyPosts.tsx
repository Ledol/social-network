import React from 'react';
import {Post} from "./Post/Post";
import style from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div className={style.content}>
            <h3> My Posts</h3>
            <div>
               <textarea></textarea>
                <button>Add Post</button>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>
    );
};
