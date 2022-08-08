import React from 'react';
import style from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div ><img className={style.imgCity}
                       src="https://media.istockphoto.com/photos/group-of-women-running-in-nature-area-picture-id514066434?k=20&m=514066434&s=612x612&w=0&h=WlMQseXBhWFii76dMGlsY2_Rfm0Nhb4rbN_mPuu4QOw=" alt="main img"/> </div>
            <div className={style.discriptionBlock}>
                Ava + Description</div>
        </div>
    );
};
