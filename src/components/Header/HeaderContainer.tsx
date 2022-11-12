import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { logoutTC } from "../../redux/authReducer";

class HeaderContainer extends React.Component<HeaderPropsType> {
  /*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })*/ // axios request
  /* authAPI.getAuth()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            });*/ // API request

  render() {
    return (
      <Header
        isAuth={this.props.isAuth}
        login={this.props.login}
        logoutTC={this.props.logoutTC}
      />
    );
  }
}

type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType;
type MapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};
type MapDispatchToPropsType = {
  logoutTC: () => void;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.data.login,
});

export default connect(mapStateToProps, { logoutTC })(HeaderContainer);
