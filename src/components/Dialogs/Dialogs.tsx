import React, { FC } from "react";
import style from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogsPropsType } from "./DialogsContainer";
import { AddMessageFormRedux, FormDataType } from "./AddMessageForm";

export const Dialogs: FC<DialogsPropsType> = ({
  sendNewMessage,
  dialogs,
  message,
}) => {
  let dialogsElement = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  let messagesElement = message.map((m) => (
    <Message key={m.id} id={m.id} message={m.message} />
  ));

  const onSubmitHandler = (formData: FormDataType) => {
    sendNewMessage(formData.newMessage);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElement}</div>
      <div className={style.messages}>{messagesElement}</div>
      <AddMessageFormRedux onSubmit={onSubmitHandler} />
    </div>
  );
};
