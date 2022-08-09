import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {RootStateType} from "./redux/State";
import {Friends} from "./components/Friends/Friends";


type AppPropsType = {
    state: RootStateType
}


function App (props: AppPropsType) {
  return (

    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <Friends friends={props.state.sidebar.friends}/>
        <div className='app-wrapper-content'>
            <Route path="/profile" render={()=> {
                return <Profile posts={props.state.profilePage.posts} />
            }} />
            <Route path="/dialogs" render={()=> {
                return  <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                 messages={props.state.dialogsPage.messages} />
            }} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/setting" component={Setting} />

        </div>


    </div>

  );
}

export default App;
