import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, changeMessageText, changePostText, state, subscriber} from "./redux/State";
import {BrowserRouter} from "react-router-dom";



const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 changePostText={changePostText}
                 addMessage={addMessage}
                 changeMessageText={changeMessageText}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );
}


rerenderEntireTree();
subscriber(rerenderEntireTree);