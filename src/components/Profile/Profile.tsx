import React, { memo } from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../redux/profileReducer";

type ProfilePropsType = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
};

export const Profile = memo((props: ProfilePropsType) => {
  console.log("Profile rendered");
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
});
