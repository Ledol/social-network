import React, {FC} from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<UserType>
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}


export const Users: FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((page, index) => {
                    return <span key={index} onClick={() => props.onPageChanged(page)}
                                 className={props.currentPage === page
                                     ? style.selectedPage
                                     : ''
                                 }>{page}</span>
                })}
            </div>
            {props.users.map(u => {
                return <div key={u.id}>
            <span>
                <div> <NavLink to={'/profile/' + u.id}>
                    <img className={style.photo}
                         src={u.photos.small !== null ? u.photos.small : userPhoto}
                         alt="photo"/>
                </NavLink>
                    </div>
                <div>
                    {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollowed</button>
                        : <button onClick={() => props.follow(u.id)}>Followed</button>
                    }
                </div>
            </span>
                    <span>
                <div>
                   {u.name}
                </div>
                <div>
                    {u.status}
                </div>
                </span>
                    <span>
                <div>
                   {"u.location.country"}
                </div>
                <div>
                    {"u.location.city"}
                </div>
                </span>
                </div>
            })}
        </div>
    );
};
