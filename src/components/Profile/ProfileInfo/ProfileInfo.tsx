import React from 'react';
import style from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div ><img className={style.imgCity}
                       src="https://media.istockphoto.com/photos/group-of-women-running-in-nature-area-picture-id514066434?k=20&m=514066434&s=612x612&w=0&h=WlMQseXBhWFii76dMGlsY2_Rfm0Nhb4rbN_mPuu4QOw=" alt="main img"/> </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt="userProfile"/>
                <div>Full Name: {props.profile.fullName}</div>
                <div>About Me: {props.profile.aboutMe}</div>
                <div>Facebook: {props.profile.contacts.facebook}</div>
                <div>GitHub: {props.profile.contacts.github}</div>
                </div>
        </div>
    );
};
