import React, {FC} from 'react';
import style from "../Dialogs.module.css";
import {MessageType} from "../../../redux/State";



export const Message: FC<MessageType> = ({message}) => {
    return <div className={style.message}>{message}</div>
}