import React, {FC} from 'react';
import style from "../Dialogs.module.css";



export type MessagePropsType = {
    message: string
    id: number
}


export const Message: FC<MessagePropsType> = ({message}) => {
    return <div className={style.message}>{message}</div>
}