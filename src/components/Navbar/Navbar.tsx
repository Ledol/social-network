import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
               <NavLink to='/Profile' activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/Dialogs' activeClassName={style.activeLink}>Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/News' activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/Music' activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/Setting' activeClassName={style.activeLink}>Setting</NavLink>
            </div>
        </nav>
    );
};
