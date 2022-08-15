import React, {FC} from 'react';
import {MyPosts, MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/Store";



export const Profile: FC<ProfilePageType & MyPostsType> = ({posts, newPostText, dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} dispatch={dispatch}
                     newPostText={newPostText}  />
        </div>
    );
};
