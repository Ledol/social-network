import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, DialogsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {MyPostsType} from "./components/Profile/MyPosts/MyPosts";


type AppPropsType = MyPostsType & DialogsType


function App (props: AppPropsType) {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
            <Route path="/profile" render={()=> {
                return <Profile postsData={props.postsData} />
            }} />
            <Route path="/dialogs" render={()=> {
                return  <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />
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
