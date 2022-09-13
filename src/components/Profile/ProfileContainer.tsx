import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";


class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }


    render() {
        return (
                <Profile {...this.props} profile={this.props.profile} />
        )

    }
}

type mapStateToPropsType = {
    profile: ProfileType
}
type maDispatchToProps = {
    setUserProfile: (profile:ProfileType) => void
}

export type ProfilePropsType = mapStateToPropsType & maDispatchToProps

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer)