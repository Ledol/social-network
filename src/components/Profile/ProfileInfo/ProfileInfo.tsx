import React, {FC} from "react";
import style from "./ProfileInfo.module.css";
import { ProfileType } from "../../../redux/profileReducer";
import { Preloader } from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import { ProfileStatus } from "./ProfileStatus";

type ProfileInfoPropsType = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
};

export const  ProfileInfo: FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          className={style.imgCity}
          src="https://media.istockphoto.com/photos/group-of-women-running-in-nature-area-picture-id514066434?k=20&m=514066434&s=612x612&w=0&h=WlMQseXBhWFii76dMGlsY2_Rfm0Nhb4rbN_mPuu4QOw="
          alt="main img"
        />{" "}
      </div>
      <div className={style.descriptionBlock}>
        <img
          src={
            profile.photos.large !== null
              ? profile.photos.large
              : userPhoto
          }
          alt="userProfile"
        />
        {profile.userId === 25503 ? (
          <h4>
            <ProfileStatus
              status={status}
              updateStatus={updateStatus}
            />
          </h4>
        ) : (
          <h4>{status}</h4>
        )}
        {/*<h4><ProfileStatus status={props.status} updateStatus={props.updateStatus} /></h4>*/}
        <div>Full Name: {profile.fullName}</div>
        <div>About Me: {profile.aboutMe}</div>
        <div>Facebook: {profile.contacts.facebook}</div>
        <div>GitHub: {profile.contacts.github}</div>
      </div>
    </div>
  );
};
