import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfileTC, ProfileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)*/
        /*profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });*/ // API request
        this.props.getProfileTC(userId)
    }


    render() {
        if (!this.props.isAuth) return <Redirect to="/login"/>
        return (
                <Profile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth} />
        )

    }
}

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type mapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}
type maDispatchToPropsType = {
    getProfileTC: (userId: string) => void
}

export type ProfilePropsType = mapStateToPropsType & maDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, { getProfileTC}) (WithUrlDataContainerComponent)