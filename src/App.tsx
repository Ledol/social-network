import React, {Component, ComponentType} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route, withRouter} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { LoginContainer} from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./redux/appReducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";


class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <FriendsContainer/>
                <div className='app-wrapper-content'>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/setting" component={Setting}/>

                </div>
            </div>
        )
    }
}
type AppPropsType = MapDispatchToPropsType & MapStateToPropsType;
type MapDispatchToPropsType = {
    initializeAppTC: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}


let mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<ComponentType> (
    withRouter,
    connect(mapStateToProps, { initializeAppTC})
)(App)
