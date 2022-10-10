import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfileTC, ProfileType} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export class ProfileContainer extends React.Component<PropsType> {

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
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}


type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type mapStateToPropsType = {
    profile: ProfileType

}
type maDispatchToPropsType = {
    getProfileTC: (userId: string) => void
}

export type ProfilePropsType = mapStateToPropsType & maDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,

})


//export default withAuthRedirect(withRouter(connect (mapStateToProps, { getProfileTC}) (ProfileContainer)))

export default compose<ComponentType> (
    connect (mapStateToProps, { getProfileTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)