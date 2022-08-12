import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/State";
import {BrowserRouter} from "react-router-dom";



const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}

            />
        </BrowserRouter>
        , document.getElementById('root')
    );
}


rerenderEntireTree();
store.subscriber(rerenderEntireTree);