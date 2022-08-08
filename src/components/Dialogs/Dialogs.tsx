import React, {FC} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/State";



export const Dialogs: FC<DialogsPageType> = ({dialogs, messages}) => {

    let dialogsElement = dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    let messagesElement = messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


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
