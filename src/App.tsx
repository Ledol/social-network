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
import { StoreType} from "./redux/State";
import {Friends} from "./components/Friends/Friends";



type AppPropsType =  {
    store: StoreType
}


function App (props: AppPropsType) {
    const state = props.store.getState()
  return (

    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <Friends friends={state.sidebar.friends}/>
        <div className='app-wrapper-content'>
            <Route path="/profile" render={()=> {
                return <Profile posts={state.profilePage.posts}
                                dispatch={props.store.dispatch.bind(props.store)}
                                newPostText={state.profilePage.newPostText} />
            }} />
            <Route path="/dialogs" render={()=> {
                return  <Dialogs dialogs={state.dialogsPage.dialogs}
                                 messages={state.dialogsPage.messages}
                                 addMessage={props.store.addMessage.bind(props.store)}
                                 changeMessageText={props.store.changeMessageText.bind(props.store)}
                                 newMessageText={state.dialogsPage.newMessageText}
                />
            }} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/setting" component={Setting} />

        </div>


    </div>

  );
}

export default App;
