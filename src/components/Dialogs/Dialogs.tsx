import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";


export type DialogsType = {
    dialogsData: Array<DialogItemPropsType>
    messagesData: Array<MessagePropsType>
}


export const Dialogs = (props: DialogsType) => {

    let dialogsElement = props.dialogsData.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    let messagesElement = props.messagesData.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


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
