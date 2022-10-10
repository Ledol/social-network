import React from 'react';
import {
    sendNewMessage,
    updateNewMessage,
    DialogType,
    MessageType
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



type MapStateToPropsType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>
    newMessageText: string

}

type MapDispatchToPropsType = {
    updateNewMessage: (newMessage: string) => void
    sendNewMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
   return {
       dialogs: state.dialogsPage.dialogs,
       message: state.dialogsPage.messages,
       newMessageText: state.dialogsPage.newMessageText,
   }
}
/*const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        updateNewMessage: (newMessage: string) => {
            dispatch(updateNewMessageAC(newMessage))
        },
        sendMessage: () => {
            dispatch(sendNewMessageAC())
        }
    }
}*/

export const DialogsContainer = withAuthRedirect(connect (mapStateToProps, {updateNewMessage, sendNewMessage})(Dialogs))
