import React from 'react';
import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <img
                src="http://cdn.onlinewebfonts.com/svg/img_362868.png"
                //http://cdn.onlinewebfonts.com/svg/img_362868.png
                alt="logo"/>
            <span className={style.title}> Connect</span>
        </header>
    );
};
