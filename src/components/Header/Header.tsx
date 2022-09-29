import React, {FC} from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    isAuth: boolean
    login: string| null
}

export const Header: FC<HeaderPropsType> = ({isAuth, login}) => {
    return (
        <header className={style.header}>
            <img
                src="https://cdn.onlinewebfonts.com/svg/img_362868.png"
                alt="logo"/>
            <span className={style.title}> Connect</span>
            <div className={style.loginBlock}>
                {isAuth ? <span>{login}</span> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};
