import React, { FC } from "react";
import style from "../Dialogs.module.css";
import { MessageType } from "../../../redux/dialogsReducer";

export const Message: FC<MessageType> = ({ message }) => {
  return <div className={style.message}>{message}</div>;
};
