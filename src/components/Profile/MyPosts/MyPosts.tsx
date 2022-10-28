import React, {FC} from 'react';
import {Post} from "./Post/Post";
import style from './MyPosts.module.css'
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddPostFormRedux, PostFormType} from "./AddPostForm";


export const MyPosts: FC<MyPostsPropsType> = (
    {
        posts,
        addPost,
    }) => {

    let postsElement = posts.map(post => {
        return <Post key={post.id}
                     id={post.id}
                     likesCount={post.likesCount}
                     message={post.message}
        />
    })

    /*const addPostHandler = () => {
        addPost()
    }
    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updatePostText(e.currentTarget.value)
    }*/
    const addNewPost = (values: PostFormType) => {
        addPost(values.newPost)
    }

    return (
        <div className={style.content}>
            <h3> My Posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewPost}/>
                {/*<textarea value={newPostText} onChange={onChangePostHandler}></textarea>
                <button onClick={addPostHandler}>Add Post</button>*/}
                <div className={style.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
};
