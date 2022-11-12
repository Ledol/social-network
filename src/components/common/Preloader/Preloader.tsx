import React from "react";
import style from "../../Users/Users.module.css";
import preloader from "../../../assets/images/preloader4.gif";

export const Preloader = () => {
  return (
    <div>
      <img className={style.preload} src={preloader} alt="preloader" />
    </div>
  );
};
