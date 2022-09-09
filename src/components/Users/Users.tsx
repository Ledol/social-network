import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from "../../assets/images/user.png"


class Users extends React.Component<UsersPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

        onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return (
            <div>
                <div>
                    {pages.map((page, index) => {
                        return <span key={index} onClick={()=> this.onPageChanged(page)} className={this.props.currentPage === page
                            ? style.selectedPage
                            : ''
                        }>{page}</span>
                    })}
                </div>
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

export default (Users);

