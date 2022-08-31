import React, {FC} from 'react';
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'

export const Users: FC<UsersPropsType> = (
    {
        usersPage,
        follow,
        unfollow,
        setUsers
    }) => {

    if (usersPage.users.length === 0) {
        setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXMRw4Ra8PtT3E8x9RsDiK5sGmr5FDfi_aQ&usqp=CAU',
                followed: false,
                userName: 'Dmitry',
                status: "I'm a boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-woman-vector-vector-id1227618778?s=2048x2048',
                followed: true,
                userName: 'Vlad',
                status: "I'm a boss",
                location: {city: "Vilnius", country: "Litueva"}
            },
            {
                id: 3,
                photoUrl: 'https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-woman-vector-vector-id1227618778?s=2048x2048',
                followed: false,
                userName: 'Vadzim',
                status: "I'm a boss",
                location: {city: "Turin", country: "Italy"}
            },
        ])
    }


    let usersElement = usersPage.users.map(u => {
        return <div key={u.id}>
            <span>
                <div><img className={style.photo}
                          src='https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-woman-vector-vector-id1227618778?s=2048x2048'
                          alt="photo"/></div>
                <div>
                    {u.followed
                        ? <button onClick={() => unfollow(u.id)}>Unfollowed</button>
                        : <button onClick={() => follow(u.id)}>Followed</button>
                    }
                </div>
            </span>
            <span>
                <div>
                   {u.userName}
                </div>
                <div>
                    {u.status}
                </div>
                </span>
            <span>
                <div>
                   {u.location.country}
                </div>
                <div>
                    {u.location.city}
                </div>
                </span>
        </div>
    })

    return (
        <div>
            {usersElement}
        </div>
    );
};

