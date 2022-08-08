import React, {FC} from 'react';
import {Post} from "./Post/Post";
import style from './MyPosts.module.css'
import {ProfilePageType} from "../../../redux/State";



export const MyPosts: FC<ProfilePageType> = ({posts}) => {
    let postsElement = posts.map(post => <Post key={post.id} id={post.id} likesCount={post.likesCount} message={post.message}/>)

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
