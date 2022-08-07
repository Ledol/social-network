import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
           <div className={style.dialogsItem}>
               <div className={style.dialog}>
                   <NavLink to='/dialogs/1' >Dima</NavLink>
                  </div>
               <div className={style.dialog}>
                   <NavLink to='/dialogs/2' >Katya</NavLink>
               </div>
               <div className={style.dialog}>
                   <NavLink to='/dialogs/3' >Alex</NavLink>
               </div>
               <div className={style.dialog}>
                   <NavLink to='/dialogs/4' >Mike</NavLink>
               </div>
               <div className={style.dialog}>
                   <NavLink to='/dialogs/5' >Helen</NavLink>
               </div>
           </div>
           <div className={style.messages}>
               <div className={style.message}>Hey, how are you?</div>
               <div className={style.message}>Are you really?</div>
               <div className={style.message}>Have a good day!</div>
               <div className={style.message}>Wake up!</div>
               <div className={style.message}>Dear, what's wrong?</div>
           </div>
        </div>
    );
};
