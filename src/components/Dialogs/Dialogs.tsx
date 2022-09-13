import React, {ChangeEvent, FC} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";



export const Dialogs: FC<DialogsPropsType> = (
    {
        updateNewMessage,
        sendNewMessage,
        dialogs,
        message,
        newMessageText,
    }) => {

    let dialogsElement = dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    let messagesElement = message.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


    const onSendMessage = () => {
        sendNewMessage()
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessage(e.currentTarget.value)
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea value={newMessageText} onChange={onChangeMessageHandler}></textarea>
                <button onClick={onSendMessage}>New message</button>
            </div>
        </div>
    );
};
