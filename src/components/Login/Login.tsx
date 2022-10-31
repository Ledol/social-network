import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type LoginType = MapStateToPropsType & {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}

export const Login = (props: LoginType) => {

    const onSubmitHandler = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};
type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return{
        isAuth: state.auth.isAuth
    }
}


export const LoginContainer  = connect(mapStateToProps, {loginTC})(Login)

