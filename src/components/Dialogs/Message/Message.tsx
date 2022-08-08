import React, {FC} from 'react';
import style from "../Dialogs.module.css";



type MessagePropsType = {
    message: string
}


export const Message: FC<MessagePropsType> = ({message}) => {
    return <div className={style.message}>{message}</div>
}