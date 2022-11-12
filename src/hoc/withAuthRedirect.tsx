import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";
import { Redirect } from "react-router-dom";

type mapStateToPropsType = {
  isAuth: boolean;
};
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: mapStateToPropsType) => {
    let { isAuth, ...restProps } = props;

    if (!props.isAuth) return <Redirect to="/login" />;

    return <Component {...(restProps as T)} />;
  };

  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return ConnectedRedirectComponent;
}
