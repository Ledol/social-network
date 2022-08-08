import React, {FC} from 'react';
import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}


export const DialogItem: FC<DialogItemPropsType> = ({name, id}) => {
    const path = '/dialogs/' + id

    return <div className={style.dialog}>
        <NavLink to={path}>{name}</NavLink>
    </div>
}
