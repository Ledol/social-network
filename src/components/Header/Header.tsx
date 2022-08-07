import React from 'react';
import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <img
                src="http://cdn.onlinewebfonts.com/svg/img_486696.png"
                alt="logo"/>
        </header>
    );
};
