import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



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

let dialogsElement = dialogsData.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
let messagesElement = messagesData.map(m => <Message key={m.id} message={m.message}/>)


export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    );
};
