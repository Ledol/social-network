import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }

        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)*/
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }


    render() {
        return (
                <Profile {...this.props} profile={this.props.profile} />
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
    setUserProfile: (profile:ProfileType) => void
}

export type ProfilePropsType = mapStateToPropsType & maDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)