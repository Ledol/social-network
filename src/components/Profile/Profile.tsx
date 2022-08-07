import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <>
            <div ><img className="contentIMG"
                       src="https://media.istockphoto.com/photos/group-of-women-running-in-nature-area-picture-id514066434?k=20&m=514066434&s=612x612&w=0&h=WlMQseXBhWFii76dMGlsY2_Rfm0Nhb4rbN_mPuu4QOw=" alt="main img"/> </div>
            <div> Ava + Description</div>
            <MyPosts  />
        </>
    );
};
