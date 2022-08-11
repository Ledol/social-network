import React, {ChangeEvent, FC} from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/State";

export type PropsType = {
    addMessage: (messageText: string) => void
    changeMessageText: (newMessage: string) => void
}

export const Dialogs: FC<DialogsPageType & PropsType> = ({dialogs, messages, addMessage, changeMessageText,newMessageText}) => {

    let dialogsElement = dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    let messagesElement = messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


    const addNewMessage = () => {
        addMessage(newMessageText)
        changeMessageText('')
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeMessageText(e.currentTarget.value)
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
                <textarea value={newMessageText} onChange={onChangeMessageHandler} ></textarea>
                <button onClick={addNewMessage}>New message</button>
            </div>
        </div>
    );
};
