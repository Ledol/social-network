import React from 'react';
import {Post, PostType} from "./Post/Post";
import style from './MyPosts.module.css'

/*const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'What\'s, wrong?', likesCount: 25},
]*/
export type MyPostsType = {
    postsData: Array<PostType>
}


export const MyPosts = (props: MyPostsType) => {
    let postsElement = props.postsData.map(post => <Post key={post.id} id={post.id} likesCount={post.likesCount} message={post.message}/>)

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
