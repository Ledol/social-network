import React, {FC} from "react";
import {UserType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
  totalUsersCount: number;
  pageSize: number;
  onPageChanged: (pageNumber: number) => void;
  currentPage: number;
  users: Array<UserType>;
  unfollowTC: (userID: number) => void;
  followTC: (userID: number) => void;
  toggleIsFollowingProgress: (fetching: boolean, userId: number) => void;
  followingInProgress: Array<number>;
};

export const Users: FC<UsersPropsType> = (props) => {
  /*let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }*/

  return (
    <div>
      <Paginator totalUsersCount={props.totalUsersCount}
                 pageSize={props.pageSize}
                 currentPage={props.currentPage}
                 onPageChanged={props.onPageChanged}/>
      {/*<div>
        {pages.map((page, index) => {
          return (
            <span
              key={index}
              onClick={() => props.onPageChanged(page)}
              className={props.currentPage === page ? style.selectedPage : ""}
            >
              {page}
            </span>
          );
        })}
      </div>*/}
      {props.users.map((u) => {
        return (
            <User  followTC={props.followTC}
                   unfollowTC={props.unfollowTC}
                   key={u.id}
                   followingInProgress={props.followingInProgress}
                   user={u}
            />
         /* <div key={u.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    className={style.photo}
                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                    alt="photo"
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unfollowTC(u.id);
                      /!*props.toggleIsFollowingProgress(true, u.id)
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
                            });*!/ // API request
                    }}
                  >
                    Unfollowed
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.followTC(u.id);
                      /!*props.toggleIsFollowingProgress(true, u.id)
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
                            });*!/ // API request
                    }}
                  >
                    Followed
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </div>*/
        );
      })}
    </div>
  );
};
