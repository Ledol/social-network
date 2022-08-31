import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <FriendsContainer/>
            <div className='app-wrapper-content'>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/setting" component={Setting}/>

            </div>
        </div>

    );
}

export default App;
