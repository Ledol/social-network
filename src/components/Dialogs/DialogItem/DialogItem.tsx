import React, { FC } from "react";
import style from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

type DialogsType = {
  id: number;
  name: string;
};

export const DialogItem: FC<DialogsType> = ({ name, id }) => {
  const path = "/dialogs/" + id;

  return (
    <div className={style.dialog}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};
