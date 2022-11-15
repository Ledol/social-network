import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  followTC,
  getUsersTC,
  setCurrentPage,
  toggleIsFollowingProgress,
  unfollowTC,
  UserType,
} from "../../redux/usersReducer";
import React, {ComponentType} from "react";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersAPIContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    const {currentPage, pageSize} = this.props

    this.props.getUsersTC(currentPage, pageSize);
    /*axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true})*/ // axios request
    /*this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });*/ // API request
  }

  onPageChanged = (pageNumber: number) => {
    const {pageSize} = this.props

    this.props.setCurrentPage(pageNumber);
    this.props.getUsersTC(pageNumber, pageSize);
    /*this.props.toggleIsFetching(true)
        /!*axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true})*!/
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            });*/ // API request
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollowTC={this.props.unfollowTC}
          followTC={this.props.followTC}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

/*const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}*/

/*const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}*/ // MapDispatchToProps

/*export const UsersContainer = connect(mapStateToProps, {
  followTC,
  unfollowTC,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsersTC,
})(UsersAPIContainer);*/

// Types
type mapStateToPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};
type mapDispatchToPropsType = {
  followTC: (userID: number) => void;
  unfollowTC: (userID: number) => void;
  setCurrentPage: (currentPage: number) => void;
  toggleIsFollowingProgress: (fetching: boolean, userId: number) => void;
  getUsersTC: (currentPage: number, pageSize: number) => void;
};

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

export const UsersContainer = compose<ComponentType>(
    connect(mapStateToProps, {
      followTC,
      unfollowTC,
      setCurrentPage,
      toggleIsFollowingProgress,
      getUsersTC,
    }),
    withAuthRedirect
)(UsersAPIContainer)
