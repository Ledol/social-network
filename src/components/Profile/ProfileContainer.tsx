import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfileTC, getUserStatusTC, ProfileType, updateStatusTC} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
         if (!userId) {

             userId = JSON.stringify(this.props.authorizedUserId)
         }
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)*/
        /*profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });*/ // API request
        this.props.getProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }


    render() {
        return (
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatusTC}
                />
        )

    }
}


type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type mapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: null | number
    isAuth: boolean

}
type maDispatchToPropsType = {
    getProfileTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
}

export type ProfilePropsType = mapStateToPropsType & maDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.data.id,
    isAuth: state.auth.isAuth
})


//export default withAuthRedirect(withRouter(connect (mapStateToProps, { getProfileTC}) (ProfileContainer)))

export default compose<ComponentType> (
    connect (mapStateToProps, { getProfileTC,getUserStatusTC, updateStatusTC }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)