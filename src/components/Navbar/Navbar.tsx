import React from 'react';
import style from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a href="#">Profile</a>
            </div>
            <div className={style.item}>
                <a href="#">Dialogs</a>
            </div>
            <div className={style.item}>
                <a href="#">News</a>
            </div>
            <div className={style.item}>
                <a href="#">Music</a>
            </div>
            <div className={style.item}>
                <a href="#">Setting</a>
            </div>
        </nav>
    );
};
