import React from 'react';
import {connect} from "react-redux";
import {Friends} from "./Friends";
import {AppStateType} from "../../redux/redux-store";
import {FriendsType} from "../../redux/sidebar.Reducer";



type MapStateToPropsType = {
    friends: Array<FriendsType>
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        friends: state.sidebar.friends
    }
}

export const FriendsContainer = connect(mapStateToProps)(Friends)

