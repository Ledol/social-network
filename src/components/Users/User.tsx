import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import style from "./User.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/usersReducer";

type UserPropsType = {
    unfollowTC: (userID: number) => void;
    followTC: (userID: number) => void;
    followingInProgress: Array<number>;
    user: UserType
}

export const User: FC<UserPropsType> = ({user, followTC, unfollowTC, followingInProgress}) => {

    return (
        <div>
            <span>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                      className={style.photo}
                      src={user.photos.small !== null ? user.photos.small : userPhoto}
                      alt="photo"
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                    <button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            unfollowTC(user.id);
                            /*props.toggleIsFollowingProgress(true, u.id)
                              /!*axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                  withCredentials: true,
                                  headers: {
                                      "API-KEY": "36c6d8e6-c7f6-48a8-984f-4e1b0d11ee5b"
                                  }
                              })*!/  // axios request in component
                              usersAPI.unfollowUser(u.id)
                                  .then((response) => {
                                      if (response.data.resultCode === 0) {
                                          props.unfollow(u.id)
                                      }
                                      props.toggleIsFollowingProgress(false, u.id)
                                  });*/ // API request
                        }}
                    >
                        Unfollowed
                    </button>
                ) : (
                    <button
                        disabled={followingInProgress.some(
                            (id) => id === user.id
                        )}
                        onClick={() => {
                            followTC(user.id);
                            /*props.toggleIsFollowingProgress(true, u.id)
                              /!*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                  withCredentials: true,
                                  headers: {
                                      "API-KEY": "36c6d8e6-c7f6-48a8-984f-4e1b0d11ee5b"
                                  }
                              })*!/  // axios request in component
                              usersAPI.followUser(u.id)
                                  .then((response) => {
                                      if (response.data.resultCode === 0) {
                                          props.follow(u.id)
                                      }
                                      props.toggleIsFollowingProgress(false, u.id)
                                  });*/ // API request
                        }}
                    >
                        Followed
                    </button>
                )}
              </div>
            </span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
        </div>
    );
};
