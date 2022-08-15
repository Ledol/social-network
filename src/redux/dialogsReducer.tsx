import {DialogsPageType, DispatchType, MessageType} from "./State";

export const dialogsReducer = (state: DialogsPageType, action:DispatchType) => {
    switch (action.type) {
        case "SEND-MESSAGE" : {
            let newMessage:MessageType  = {
                id: new Date().getTime(),
                message: action.payload.newMessageText,}
            state.messages.push(newMessage)
            /*state._onChange()*/
            return state
        }
        case "CHANGE-MESSAGE-TEXT" : {
            state.newMessageText  = action.payload.newMessage
            return state
        }   // Update body new message
        default:
            console.log("Dialogs page wasn't changed")
            return state

    }
}

export type sendNewMessageACType = ReturnType<typeof sendNewMessageAC>
export const sendNewMessageAC = (newMessageText: string) => {
    return {
        type: "SEND-MESSAGE",
        payload: {newMessageText}
    }as const
}
export type changeMessageTextACType = ReturnType<typeof changeMessageTextAC>
export const changeMessageTextAC = (newMessage: string) => {
    return {
        type: "CHANGE-MESSAGE-TEXT",
        payload: {newMessage}
    }as const
}