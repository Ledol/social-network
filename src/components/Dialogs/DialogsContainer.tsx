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


/*
export const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState().dialogsPage;

                const onSendMessage = () => {
                    store.dispatch(sendNewMessageAC())
                }

                const onChangeMessage = (newMessage: string) => {
                    store.dispatch(changeMessageTextAC(newMessage))
                }


                return <Dialogs updateNewMessage={onChangeMessage}
                                sendMessage={onSendMessage}
                                dialogsPage={state}
                                dialogs={state.dialogs}
                                messages={state.messages}
                                newMessageText={state.newMessageText}/>
            }
        }

    </StoreContext.Consumer>
};
*/

type MapStateToPropsType = {
   // dialogsPage: initialStateType
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
       //dialogsPage: state.dialogsPage,
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

export const DialogsContainer = connect (mapStateToProps, {updateNewMessage, sendNewMessage})(Dialogs)
