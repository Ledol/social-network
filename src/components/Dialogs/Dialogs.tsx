import React, {FC} from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string
    id: number
}

const DialogsItem: FC<DialogsItemPropsType> = ({name, id}) => {
    const path = '/dialogs/' + id
    return <div className={style.dialog}>
        <NavLink to={path} >{name}</NavLink>
    </div>
}

type MessagePropsType = {
    message: string
}

const Message: FC<MessagePropsType> = ({message}) => {
    return <div className={style.message}>{message}</div>
}


export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
           <div className={style.dialogsItem}>
               <DialogsItem name='Dima' id={1} />
               <DialogsItem name='Kate' id={2} />
               <DialogsItem name='Alex' id={3} />
               <DialogsItem name='Mike' id={4} />
               <DialogsItem name='Helen' id={5} />
           </div>
           <div className={style.messages}>
               <Message message='Hey, how are you?'/>
               <Message message='Are you really?'/>
               <Message message='Have a good day!'/>
               <Message message='Wake up!'/>
               <Message message="Dear, what's wrong?"/>
           </div>
        </div>
    );
};
