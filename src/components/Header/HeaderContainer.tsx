import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            });
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }
}

type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isAuth: boolean
    login: string|null
}
type MapDispatchToPropsType = {
    setAuthUserData: (data: DataType) => void
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
     isAuth: state.auth.isAuth,
     login: state.auth.data.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
