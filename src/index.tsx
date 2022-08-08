import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Kate'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Mike'},
    {id: 5, name: 'Helen'},
]

const messagesData = [
    {id: 1, message: 'Hey, how are you?'},
    {id: 2, message: 'Are you really?'},
    {id: 3, message: 'Have a good day!'},
    {id: 4, message: 'Wake up!'},
    {id: 5, message: 'Dear, what\'s wrong?'},
]

const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'What\'s, wrong?', likesCount: 25},
]


ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}  />,
  document.getElementById('root')
);