import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {RootStateType} from "./redux/State";


type AppPropsType = {
    state: RootStateType
}


function App (props: AppPropsType) {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
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
      </BrowserRouter>
  );
}

export default App;
