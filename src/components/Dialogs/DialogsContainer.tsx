import React, {ComponentType} from 'react';
import {
    sendNewMessage,
    DialogType,
    MessageType
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



type MapStateToPropsType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>

}

type MapDispatchToPropsType = {
    sendNewMessage: (newMessage: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
   return {
       dialogs: state.dialogsPage.dialogs,
       message: state.dialogsPage.messages,
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

//export const DialogsContainer = withAuthRedirect(connect (mapStateToProps, {updateNewMessage, sendNewMessage})(Dialogs))

export default compose<ComponentType> (
    connect (mapStateToProps, { sendNewMessage}),
    withAuthRedirect
) (Dialogs)

