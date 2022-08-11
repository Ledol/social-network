import React, {FC} from 'react';
import {MyPosts, MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/State";



export const Profile: FC<ProfilePageType & MyPostsType> = ({posts, addPost,changePostText, newPostText}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     addPost={addPost}
                     changePostText={changePostText}
                     newPostText={newPostText}  />
        </div>
    );
};
