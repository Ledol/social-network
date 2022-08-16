import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {Friends} from "./components/Friends/Friends";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            {/* <Friends friends={state.sidebar.friends}/>*/}
            <div className='app-wrapper-content'>
                <Route path="/profile" render={() => {
                    return <Profile/>
                }}/>
                <Route path="/dialogs" render={() => {
                    return <DialogsContainer/>
                }}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/setting" component={Setting}/>

            </div>
        </div>

    );
}

export default App;
