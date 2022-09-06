import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from "../../assets/images/user.png"


export class Users extends React.Component<UsersPropsType> {

    constructor(props:UsersPropsType) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            });
    }

    render() {
        return(
            <div>
                {this.props.usersPage.users.map(u => {
                    return <div key={u.id}>
            <span>
                <div><img className={style.photo}
                          src={u.photos.small !== null ? u.photos.small : userPhoto}
                          alt="photo"/></div>
                <div>
                    {u.followed
                        ? <button onClick={() => this.props.unfollow(u.id)}>Unfollowed</button>
                        : <button onClick={() => this.props.follow(u.id)}>Followed</button>
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
        )
    }
}

